var slog = function(app_id,app_version)
{
  var self = this;

  self.accrued_log = [];
  self.flushed_to = 0;
  self.flush_index = 0;

  self.app_id = app_id;
  self.app_version = app_version;
  self.session_id = UUIDint();
  self.persistent_session_id = getCookie("persistent_session_id");
  if(!self.persistent_session_id)
  {
    self.persistent_session_id = self.session_id;
    setCookie("persistent_session_id",self.persistent_session_id,100);
  }

  self.req_url = "https://fielddaylab.wisc.edu/logger/log.php?app_id="+encodeURIComponent(self.app_id)+"&app_version="+encodeURIComponent(self.app_version)+"&session_id="+encodeURIComponent(self.session_id)+"&persistent_session_id="+encodeURIComponent(self.persistent_session_id);

  self.log = function(data)
  {
    data.session_n = self.flush_index;
    data.client_time = (new Date()).toISOString().split('T').join(" ");
    self.flush_index++;
    self.accrued_log.push(data);
    self.flush();
  }
  self.flush = function()
  {
    //HACK
    //self.accrued_log = []; return;

    if(!self.accrued_log.length) return;
    var xhr = new XMLHttpRequest();
    xhr.flushed = self.accrued_log[self.accrued_log.length-1].session_n;
    xhr.onreadystatechange = function()
    {
      if(xhr.readyState == 4 && xhr.status == 200)
      {
        var cutoff = self.accrued_log.length-1;
        for(var i = self.accrued_log.length-1; i >= 0 && self.accrued_log[i].session_n > xhr.flushed; i--) cutoff = i-1;
        if(cutoff >= 0) self.accrued_log.splice(0,cutoff+1);
      }
    }

    var post = "data="+encodeURIComponent(btoa(JSON.stringify(self.accrued_log)));

    xhr.open("POST", self.req_url+"&req_id="+encodeURIComponent(UUIDint()), true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(post);
  }
}

