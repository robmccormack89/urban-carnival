jQuery(function($) {
  
  // ajax search js
  $(document).on("input", "#input_search",  _.debounce(function() {
  
    var input_value = $(this).val();
    var query = input_value;
    var req;
  
    if (query.length < 2) {
      $('#response_search_results').hide();
      return false;
    }
  
    if (req != null) req.abort();
  
    req = $.ajax({
      type: 'post',
      url: myAjax.ajaxurl,
      data: {
        action: 'ajax_live_search',
        query: query
      },
      success: function(response){
  
        if(!response) {
          alert('empty');
          $('#response_search_results').hide();
          return;
        }
  
        var obj = JSON.parse(response);
  
        if (obj.result == 1) {
          document.getElementById("response_search_results").innerHTML = obj.response;
          $('#response_search_results').show();
        }
  
        $('#response_search_results ul li a').wrapInTag({
          words: [input_value]
        });
  
      },
      error: function (request, status, error) {
        $('#response_search_results').hide();
      }
  
    });
  }, 500));
  
  // search results hide on additional click away
  $(document).on('click', function (e) {
    if ($(e.target).closest(".top-search-bar").length === 0) {
      $("#response_search_results").hide();
    }
  });

  // helper function to highlight search results text
  $.fn.wrapInTag = function (opts) {
    function getText(obj) {
      return obj.textContent ? obj.textContent : obj.innerText;
    }
    var tag = opts.tag || 'strong',
      words = opts.words || [],
      regex = RegExp(words.join('|'), 'gi'),
      replacement = '<' + tag + '>$&</' + tag + '>';
    $(this).contents().each(function () {
      if (this.nodeType === 3) {
        $(this).replaceWith(getText(this).replace(regex, replacement));
      } else if (!opts.ignoreChildNodes) {
        $(this).wrapInTag(opts);
      }
    });
  };
  
  // add to cart button triggers modal when item is added to cart
  $(document).on('added_to_cart', function(e, fragments, cart_hash, this_button) {
    var modal = UIkit.modal("#MiniCartModal");
    modal.show();
  });
  
  // global
  
  // form login
  $(".woocommerce-form-login .woocommerce-form-login__submit").addClass("uk-button-primary uk-margin-top");
  
  // buttons
  $(".button").addClass("uk-button");
  $("input.submit").addClass("uk-button uk-button-primary");
  $(".woocommerce-message .button").addClass("uk-button-primary uk-button-small");
  
  // forms
  $(".woocommerce-form__input-checkbox").addClass("uk-checkbox");
  $("input#wp-comment-cookies-consent").addClass("uk-checkbox");
  $(".input-text").addClass("uk-input");
  $(".comment-form input").addClass("uk-input");
  $("input#wp-comment-cookies-consent").removeClass("uk-input");
  $("input.qty").addClass("uk-input");
  $("form label").addClass("uk-form-label");
  $(".woocommerce-form").addClass("uk-form-stacked");
  $(".comment-form").addClass("uk-form-stacked");
  $("form").addClass("uk-form-stacked");
  $("em").addClass("uk-text-danger");
  $("select").addClass("uk-select");
  $("textarea").addClass("uk-textarea");
  $("label").addClass("uk-form-label");
  
  // tables
  $("table").addClass("uk-table");
  
  //
  $(".onsale").addClass("uk-card-badge uk-label");
  
  // login/register
  $(".col2-set").attr("uk-grid", "");
  $(".col2-set").addClass("uk-child-width-1-2@m");
  
});