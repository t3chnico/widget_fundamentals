function() {
    /* widget controller */
    var c = this;
      
      c.updateIncNumber = function(incident){
          c.data.updatedIncident = incident;
          c.server.update(incident);
      }
      
  }