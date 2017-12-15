var Dragger = function(init)
{
  var default_init =
  {
    source:document.createElement('div')
  }

  var self = this;
  doMapInitDefaults(self,init,default_init);

  var evts = [];
  var ENUM = 0;
  var EVT_TYPE_DOWN = ENUM; ENUM++;
  var EVT_TYPE_MOVE = ENUM; ENUM++;
  var EVT_TYPE_UP   = ENUM; ENUM++;
  var evt_types = [];
  self.attach = function() //will get auto-called on create
  {
    if(platform == "PC")
    {
      self.source.addEventListener('mousedown', begin, false);
      self.source.addEventListener('mousemove', drag,  false);
      self.source.addEventListener('mouseup',   end,   false);
      window.addEventListener('mousemove', detectOut, false);
    }
    else if(platform == "MOBILE")
    {
      self.source.addEventListener('touchstart', begin, false);
      self.source.addEventListener('touchmove',  drag,  false);
      self.source.addEventListener('touchend',   end,   false);
      window.addEventListener('touchmove', detectOut, false);
    }
  }
  self.detach = function()
  {
    if(platform == "PC")
    {
      self.source.removeEventListener('mousedown', begin);
      self.source.removeEventListener('mousemove', drag);
      self.source.removeEventListener('mouseup',   end);
      window.removeEventListener('mousemove', detectOut, false);
    }
    else if(platform == "MOBILE")
    {
      self.source.removeEventListener('touchstart', begin);
      self.source.removeEventListener('touchmove',  drag);
      self.source.removeEventListener('touchend',   end);
      window.removeEventListener('touchmove', detectOut, false);
    }
  }

  function begin(evt)
  {
    doSetPosOnEvent(evt);
    evts.push(evt);
    evt_types.push(EVT_TYPE_DOWN);
  }
  function drag(evt)
  {
    var r = self.source.getBoundingClientRect();
    if(evt.clientX < r.left || evt.clientY < r.top || evt.clientX > r.right || evt.clientY > r.bottom)
    {
      end(evt);
      return;
    }

    doSetPosOnEvent(evt);
    evts.push(evt);
    evt_types.push(EVT_TYPE_MOVE);
  }
  function end(evt)
  {
    doSetPosOnEvent(evt);
    evts.push(evt);
    evt_types.push(EVT_TYPE_UP);
  }
  function detectOut(evt)
  {
    var r = self.source.getBoundingClientRect();
    if(evt.clientX < r.left || evt.clientY < r.top || evt.clientX > r.right || evt.clientY > r.bottom)
      end(evt);
  }
  self.filter = function(draggable)
  {
    var hit = false;
    var evt;
    for(var i = 0; i < evts.length; i++)
    {
      evt = evts[i];
      switch(evt_types[i])
      {
        case EVT_TYPE_DOWN:
        {
          if(!draggable.dragging)
          {
            if((draggable.shouldDrag && draggable.shouldDrag(evt)) || (!draggable.shouldDrag && doEvtWithinBB(evt, draggable)))
            {
              draggable.dragging = true;
              draggable.dragStart(evt);
              hit = true;
            }
          }
        }
        break;
        case EVT_TYPE_MOVE:
        {
          if(draggable.dragging)
          {
            draggable.drag(evt);
            hit = true;
          }
        }
        break;
        case EVT_TYPE_UP:
        {
          if(draggable.dragging)
          {
            draggable.dragFinish(evt);
            hit = true;
          }
          draggable.dragging = false;
        }
        break;
      }
    }
    return hit;
  }
  self.flush = function()
  {
    evts = [];
    evt_types = [];
  }

  self.attach();
}

//example draggable- just needs x,y,w,h and shouldDrag, dragStart, drag, and dragFinish callback
var Draggable = function(args)
{
  var self = this;

  //nice in smooth dragging
  self.offX = 0;
  self.offY = 0;

  self.dragging = false;
  self.x = args.x ? args.x : 0;
  self.y = args.y ? args.y : 0;
  self.w = args.w ? args.w : 0;
  self.h = args.h ? args.h : 0;

  self.shouldDrag = args.shouldDrag ? args.shouldDrag : function(evt) //optional
  {
    return doEvtWithinBB(evt, self);
  }
  self.dragStart = args.dragStart ? args.dragStart : function(evt)
  {
    self.offX = evt.doX-self.x;
    self.offY = evt.doY-self.y;
  }
  self.drag = args.drag ? args.drag : function(evt)
  {
    self.deltaX = ((evt.doX-self.x)-self.offX);
    self.deltaY = ((evt.doY-self.y)-self.offY);
    self.x = self.x + self.deltaX;
    self.y = self.y + self.deltaY;
    self.offX = evt.doX - self.x;
    self.offY = evt.doY - self.y;
  }
  self.dragFinish = args.dragFinish ? args.dragFinish : function()
  {
  }

  //nice for debugging purposes
  self.draw = function(canv)
  {
    canv.context.strokeStyle = "#00FF00";
    canv.context.strokeRect(self.x,self.y,self.w,self.h);
  }
}

