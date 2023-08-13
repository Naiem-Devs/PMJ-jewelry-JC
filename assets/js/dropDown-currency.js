
(function( $ ){
    $.fn.mySelectDropdown = function(options) {    
      return this.each(function() {  
        var $this = $(this);
        
        $this.each(function () {
          var dropdown = $("<div />").addClass("f-dropdown selectDropdown");
          
          if($(this).is(':disabled')) 
            dropdown.addClass('disabled');
  
          $(this).wrap(dropdown);
  
          var label = $("<span />").append($("<span />")
            .text($(this).attr("placeholder"))).insertAfter($(this));
          var list = $("<ul />");
  
          $(this)
            .find("option")
            .each(function () {
              var image = $(this).data('image');
              if(image) {
                list.append($("<li />").append(
                  $("<a />").attr('data-val',$(this).val())
                  .html(
                    $("<span />").append($(this).text())
                  ).prepend('<img src="'+image+'">')
                ));
              } else if($(this).val() != '') {
                list.append($("<li />").append(
                  $("<a />").attr('data-val',$(this).val())
                  .html(
                    $("<span />").append($(this).text())
                  )
                ));
              }
            });
  
          list.insertAfter($(this));
  
          if ($(this).find("option:selected").length > 0 && $(this).find("option:selected").val() != '') {
            list.find('li a[data-val="' + $(this).find("option:selected").val() + '"]').parent().addClass("active");
            $(this).parent().addClass("filled");
            label.html(list.find("li.active a").html());
          }
        });
  
        if(!$(this).is(':disabled')) {
          $(this).parent().on("click", "ul li a", function (e) {
            e.preventDefault();
            var dropdown = $(this).parent().parent().parent();
            var active = $(this).parent().hasClass("active");
            var label = active
              ? $('<span />').text(dropdown.find("select").attr("placeholder"))
              : $(this).html();
  
            dropdown.find("option").prop("selected", false);
            dropdown.find("ul li").removeClass("active");
  
            dropdown.toggleClass("filled", !active);
            dropdown.children("span").html(label);
  
            if (!active) {
              dropdown
                .find('option[value="' + $(this).attr('data-val') + '"]')
                .prop("selected", true);
              $(this).parent().addClass("active");
            }
  
            dropdown.removeClass("open");
          });
  
          $this.parent().on("click", "> span", function (e) {
            var self = $(this).parent();
            self.toggleClass("open");
          });
  
          $(document).on("click touchstart", function (e) {
            var dropdown = $this.parent();
            if (dropdown !== e.target && !dropdown.has(e.target).length) {
              dropdown.removeClass("open");
            }
          });
        }
      });
    };
  })( jQuery );
  
  $('select.f-dropdown').mySelectDropdown();




  const selectedAll = document.querySelectorAll(".wrapper-dropdown");

  selectedAll.forEach((selected) => {
    const optionsContainer = selected.children[2];
    const optionsList = selected.querySelectorAll("div.wrapper-dropdown li");
  
    selected.addEventListener("click", () => {
      let arrow = selected.children[1];
  
      if (selected.classList.contains("active")) {
        handleDropdown(selected, arrow, false);
      } else {
        let currentActive = document.querySelector(".wrapper-dropdown.active");
  
        if (currentActive) {
          let anotherArrow = currentActive.children[1];
          handleDropdown(currentActive, anotherArrow, false);
        }
  
        handleDropdown(selected, arrow, true);
      }
    });
  
    // update the display of the dropdown
    for (let o of optionsList) {
      o.addEventListener("click", () => {
        selected.querySelector(".selected-display").innerHTML = o.innerHTML;
      });
    }
  });
  
  // check if anything else ofther than the dropdown is clicked
  window.addEventListener("click", function (e) {
    if (e.target.closest(".wrapper-dropdown") === null) {
      closeAllDropdowns();
    }
  });
  
  // close all the dropdowns
  function closeAllDropdowns() {
    const selectedAll = document.querySelectorAll(".wrapper-dropdown");
    selectedAll.forEach((selected) => {
      const optionsContainer = selected.children[2];
      let arrow = selected.children[1];
  
      handleDropdown(selected, arrow, false);
    });
  }
  
  // open all the dropdowns
  function handleDropdown(dropdown, arrow, open) {
    if (open) {
      arrow.classList.add("rotated");
      dropdown.classList.add("active");
    } else {
      arrow.classList.remove("rotated");
      dropdown.classList.remove("active");
    }
  }
  
