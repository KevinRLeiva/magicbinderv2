let trash = document.getElementsByClassName("trash");

Array.from(trash).forEach(function(element) {
      element.addEventListener("click", function(){
        let objectId = this.getAttribute("data-delete")
        console.log("data: ", objectId)
        fetch('magic', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
          "allan": objectId
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
