var level = function()
{
  var self = this;
  self.map = new map();
}

var map = function()
{
  var self = this;
  self.scenes = [];
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
  self.people = [];
  self.objects = [];
  self.triggers = [];
}

var person = function()
{
  var self = this;
  self.x = 0;
  self.y = 0;
  self.w = 0;
  self.h = 0;

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

