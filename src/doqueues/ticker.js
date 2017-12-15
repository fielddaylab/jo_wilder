var Ticker = function(init)
{
  var default_init =
  {
  }

  var self = this;
  doMapInitDefaults(self,init,default_init);

  var tickables = [];
  self.register = function(tickable) { tickables.push(tickable); }
  self.unregister = function(tickable) { var i = tickables.indexOf(tickable); if(i != -1) tickables.splice(i,1); }
  self.clear = function() { tickables = []; }
  self.attach = function() {} //will auto-call on creation
  self.detach = function() {}

  self.flush = function()
  {
    for(var i = 0; i < tickables.length; i++)
      tickables[i].tick();
  }

  self.attach();
}

//example tickable- just needs tick function
var Tickable = function(args)
{
  var self = this;

  self.tick = function()
  {
    //?
  }
}

