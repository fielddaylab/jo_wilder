var Particler = function(init)
{
  var default_init =
  {
  }

  var self = this;
  doMapInitDefaults(self,init,default_init);

  var particlables = [];
  self.register = function(particlable) { particlables.push(particlable); }
  self.unregister = function(particlable) { var i = particlables.indexOf(particlable); if(i != -1) particlables.splice(i,1); }
  self.clear = function() { particlables = []; }
  self.attach = function() {} //will get auto-called on creation
  self.detach = function() {}

  //doesn't have "flush" like other doqueues.
  //instead, has "tick" and "draw" that allows particler
  //to be registered to ticker and drawer if necessary
  self.tick = function()
  {
    for(var i = 0; i < particlables.length; i++)
      if(!particlables[i].tick()) { particlables.splice(i,1); i--; } //unregister w/o "find" step
  }
  self.draw = function(canv)
  {
    for(var i = 0; i < particlables.length; i++)
      particlables[i].draw(canv);
  }

  self.attach();
}

//example particlable- needs tick that returns true for survival, false for death; and draw(canv)
var Particlable = function(args)
{
  var self = this;

  var i = 0;
  self.tick = function()
  {
    i++;
    if(i > 100) return false;
    return true;
  }
  self.draw = function(canv)
  {

  }
}

