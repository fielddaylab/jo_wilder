var level = function()
{
  var self = this;
  self.map;
}

var map = function()
{
  var self = this;
  self.scenes = [];
  self.img;
}

var scene = function()
{
  var self = this;
  //for display on the map
  self.x = 0;
  self.y = 0;
  self.w = 0;
  self.h = 0;

  self.rooms = [];
}

var room = function()
{
  var self = this;

  self.img;
  self.nav_x = 0;
  self.nav_y = 0;
  self.nav_w = 0;
  self.nav_h = 0;
  self.start_x = 0;
  self.start_y = 0;

  self.persons = [];
  self.objects = [];
  self.triggers = [];
  self.wildcards = [];
}

var person = function()
{
  var self = this;
  self.x = 0;
  self.y = 0;
  self.w = 0;
  self.h = 0;
  self.anim;

  self.options = [];
  self.requirements = [];
}

var object = function()
{
  var self = this;
  self.x = 0;
  self.y = 0;
  self.w = 0;
  self.h = 0;
  self.anim;

  self.views = [];
  self.requirements = [];
}

var trigger = function()
{
  var self = this;
  self.x = 0;
  self.y = 0;
  self.w = 0;
  self.h = 0;

  self.requirements = [];
}

var wildcard = function()
{
  var self = this;
  self.x = 0;
  self.y = 0;
  self.w = 0;
  self.h = 0;

  self.requirements = [];
}

var view = function()
{
  var self = this;
  self.anim;
  self.zones = [];
  self.requirements = [];
}

var zone = function()
{
  var self = this;
  self.x = 0;
  self.y = 0;
  self.w = 0;
  self.h = 0;

  self.requirements = [];
}

var option = function()
{
  var self = this;
  self.requirements = [];
}

var requirement = function()
{
  var self = this;
}

