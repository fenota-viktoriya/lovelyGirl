$(document).ready(() => {

   // Menu burger

   $('.header__menu_wrap').click(() => {
      $('.menu_overlay').addClass('active');
   });
   $('.menu_overlay__burger').click(() => {
      $('.menu_overlay').removeClass('active');
   });


   //Search input 

   $('#search_input').click(() => {
      $('.header__search').addClass('active');
   });
   $('.search-close').click(() => {
      $('.header__search').removeClass('active');
   });

   $('.filter__button').click(() => {
      $('.filter__value').toggleClass('active');
   });
   $('.filter__value>li').click(() => {
      $('.filter__value').removeClass('active');
   });

   //checked size of the product

   let this_size = $('.one_item__size');

   this_size.on('click', function () {
      $(this).toggleClass('checked');
   });

   //open pop up
   $('#buyclick_btn').click(() => {
      $('#buyclick_modal').addClass('active');
   });

   $('#add_order_btn').click(() => {
      $('#add_order_modal').addClass('active');
   });

   //scroll pop up

   $('#indp_btn').click(function () {
      $('.individual_par_btn').removeClass('checked');

      $('#individual_par_modal').addClass('active');
      $('.indp_modal__content').fadeIn(300);
      $('body').css('overflow', 'hidden');
   });


   //close pop up

   $('.modal_window__close').click(() => {
      $('.modal_window').removeClass('active');
      $('body').css('overflow', 'auto');
   });


   // open tooltip
   $(".icon-question-circle-o").click(function () {
      $(this).toggleClass('active');
   });



   $(document).on('mouseup', function (e) {
      let s = $('.indp__item i.active');
      if (!s.is(e.target) && s.has(e.target).length === 0) {
         s.removeClass('active');
      }
   });

   //scroll to

   function scrollToAnchor(id) {
      var aTag = $("section[id='" + id + "']");
      $('html,body').animate({ scrollTop: aTag.offset().top }, 'slow');
   }
   $("#scroll_about").click(function () {
      scrollToAnchor('contacts_form_about');
   });

   //Sliders

   let swiper1_length = document.getElementsByClassName('banner__slider').length;
   if (swiper1_length > 0) {
      var swiper1 = new Swiper('.banner__slider', {
         navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
         },
         simulateTouch: true,
         grabCursor: true,
         slidesPerView: 1.2,
         spaceBetween: 1,
         watchOverflow: true,
         loop: false,
         speed: 1500,
         autoplay: {
            delay: 2500,
            pauseOnMouseEnter: true,
         },

      });
   }

   let swiper2_length = document.getElementsByClassName('last__slider').length;
   if (swiper2_length > 0) {
      var swiper2 = new Swiper('.last__slider', {
         navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
         },
         pagination: {
            el: '.swiper-pagination',
            clickable: true,
         },
         simulateTouch: true,
         grabCursor: true,
         watchOverflow: true,
         loop: false,
         speed: 1500,
         breakpoints: {
            0: {
               slidesPerView: 2,
               spaceBetween: 20,

            },
            1350: {
               slidesPerView: 3,
               spaceBetween: 40,
            }
         }

      });
   }

   let swiper3_length = document.getElementsByClassName('swiper_preview').length;
   if (swiper3_length > 0) {

      var galleryThumbs = new Swiper(".swiper_preview", {
         centeredSlides: false,
         centeredSlidesBounds: true,
         watchOverflow: true,
         slidesPerView: 3,
         watchSlidesVisibility: true,
         watchSlidesProgress: true,
         direction: 'vertical',
         breakpoints: {
            0: {
               spaceBetween: 15,
               slidesPerView: 2,
            },
            778: {
               spaceBetween: 15,
               slidesPerView: 2,

            },
            1024: {
               slidesPerView: 3,
               spaceBetween: 20,
               centeredSlides: true,
            },
            1440: {
               spaceBetween: 30,
            },
            1600: {
               spaceBetween: 40,
            }
         }
      });
   }

   let swiper4_length = document.getElementsByClassName('swiper_big_picture').length;
   if (swiper4_length > 0) {

      var galleryMain = new Swiper(".swiper_big_picture", {
         watchOverflow: true,
         watchSlidesVisibility: true,
         watchSlidesProgress: true,
         preventInteractionOnTransition: true,
         navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
         },
         effect: 'fade',
         fadeEffect: {
            crossFade: true
         },
         thumbs: {
            swiper: galleryThumbs
         }
      });

      galleryMain.on('slideChangeTransitionStart', function () {
         galleryThumbs.slideTo(galleryMain.activeIndex);
      });

      galleryThumbs.on('transitionStart', function () {
         galleryMain.slideTo(galleryThumbs.activeIndex);
      });
   }



   // Custom select

   $('select').each(function () {
      var $this = $(this), numberOfOptions = $(this).children('option').length;

      $this.addClass('select-hidden');
      $this.wrap('<div class="select"></div>');
      $this.after('<div class="select-styled"></div>');

      var $styledSelect = $this.next('div.select-styled');
      $styledSelect.text($this.children('option').eq(0).text());

      var $list = $('<ul />', {
         'class': 'select-options'
      }).insertAfter($styledSelect);

      for (var i = 0; i < numberOfOptions; i++) {
         $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
         }).appendTo($list);
      }

      var $listItems = $list.children('li');

      $styledSelect.click(function (e) {
         e.stopPropagation();
         $('div.select-styled.active').not(this).each(function () {
            $(this).removeClass('active').next('ul.select-options').hide();
         });
         $(this).toggleClass('active').next('ul.select-options').toggle();
      });

      $listItems.click(function (e) {
         e.stopPropagation();
         $styledSelect.text($(this).text()).removeClass('active');
         $this.val($(this).attr('rel'));
         $list.hide();
      });

      $(document).click(function () {
         $styledSelect.removeClass('active');
         $list.hide();
      });

   });

   //counter 

   function order_item__counter() {
      var plus = document.getElementById("plus"),
         minus = document.getElementById("minus"),
         order_item__choose = document.getElementById("order_item__choose"),
         count = 1;
      plus.onclick = function () {
         count += 1;
         order_item__choose.innerHTML = count;
      };
      minus.onclick = function () {
         if (count >= 1) {
            count -= 1;
            order_item__choose.innerHTML = count;
         }
      };
   }

   if ($('.order_item__counter').length > 0) {
      order_item__counter();
   }

   /**
 * paymentForm
 *
 * A plugin that validates a group of payment fields.  See jquery.payment.js
 * Adapted from https://gist.github.com/Air-Craft/1300890
 */

   // if (!window.L) { window.L = function () { console.log(arguments);} } // optional EZ quick logging for debugging

   (function ($) {

      /**
       * The plugin namespace, ie for $('.selector').paymentForm(options)
       * 
       * Also the id for storing the object state via $('.selector').data()  
       */
      var PLUGIN_NS = 'paymentForm';

      var Plugin = function (target, options) {
         this.$T = $(target);
         this._init(target, options);

         /** #### OPTIONS #### */
         this.options = $.extend(
            true,               // deep extend
            {
               DEBUG: false
            },
            options
         );

         this._cardIcons = {
            "visa": "fa fa-cc-visa",
            "mastercard": "fa fa-cc-mastercard",
            "amex": "fa fa-cc-amex",
            "dinersclub": "fa fa-cc-diners-club",
            "discover": "fa fa-cc-discover",
            "jcb": "fa fa-cc-jcb",
            "default": "fa fa-credit-card-alt"
         };

         return this;
      }

      /** #### INITIALISER #### */
      Plugin.prototype._init = function (target, options) {
         var base = this;

         base.number = this.$T.find("[data-payment='cc-number']");
         base.exp = this.$T.find("[data-payment='cc-exp']");
         base.cvc = this.$T.find("[data-payment='cc-cvc']");
         base.brand = this.$T.find("[data-payment='cc-brand']");

         // Set up all payment fields inside the payment form
         base.number.payment('formatCardNumber').data('payment-error-message', 'Please enter a valid credit card number.');
         base.exp.payment('formatCardExpiry').data('payment-error-message', 'Please enter a valid expiration date.');
         base.cvc.payment('formatCardCVC').data('payment-error-message', 'Please enter a valid CVC.');

         // Update card type on input
         base.number.on('input', function () {
            base.cardType = $.payment.cardType(base.number.val());
            var fg = base.number.closest('.form-group');
            fg.toggleClass('has-feedback', true);
            fg.find('.form-control-feedback').remove();
            if (base.cardType) {
               base.brand.text(base.cardType);
               // Also set an icon
               var icon = base._cardIcons[base.cardType] ? base._cardIcons[base.cardType] : base._cardIcons["default"];
               fg.append("<i class='" + icon + " fa-lg payment-form-icon form-control-feedback'></i>");
            } else {
               $("[data-payment='cc-brand']").text("");
            }
         });

         // Validate card number on change
         base.number.on('change', function () {
            base._setValidationState($(this), !$.payment.validateCardNumber($(this).val()));
         });

         // Validate card expiry on change
         base.exp.on('change', function () {
            base._setValidationState($(this), !$.payment.validateCardExpiry($(this).payment('cardExpiryVal')));
         });

         // Validate card cvc on change
         base.cvc.on('change', function () {
            base._setValidationState($(this), !$.payment.validateCardCVC($(this).val(), base.cardType));
         });
      };

      /** #### PUBLIC API (see notes) #### */
      Plugin.prototype.valid = function () {
         var base = this;

         var num_valid = $.payment.validateCardNumber(base.number.val());
         var exp_valid = $.payment.validateCardExpiry(base.exp.payment('cardExpiryVal'));
         var cvc_valid = $.payment.validateCardCVC(base.cvc.val(), base.cardType);

         base._setValidationState(base.number, !num_valid);
         base._setValidationState(base.exp, !exp_valid);
         base._setValidationState(base.cvc, !cvc_valid);

         return num_valid && exp_valid && cvc_valid;
      }

      /** #### PRIVATE METHODS #### */
      Plugin.prototype._setValidationState = function (el, erred) {
         var fg = el.closest('.form-group');
         fg.toggleClass('has-error', erred).toggleClass('has-success', !erred);
         fg.find('.payment-error-message').remove();
         if (erred) {
            fg.append("<span class='text-danger payment-error-message'>" + el.data('payment-error-message') + "</span>");
         }
         return this;
      }

      /**
       * EZ Logging/Warning (technically private but saving an '_' is worth it imo)
       */
      Plugin.prototype.DLOG = function () {
         if (!this.DEBUG) return;
         for (var i in arguments) {
            console.log(PLUGIN_NS + ': ', arguments[i]);
         }
      }
      Plugin.prototype.DWARN = function () {
         this.DEBUG && console.warn(arguments);
      }


      /*###################################################################################
      * JQUERY HOOK
      ###################################################################################*/

      /**
       * Generic jQuery plugin instantiation method call logic 
       * 
       * Method options are stored via jQuery's data() method in the relevant element(s)
       * Notice, myActionMethod mustn't start with an underscore (_) as this is used to
       * indicate private methods on the PLUGIN class.   
       */
      $.fn[PLUGIN_NS] = function (methodOrOptions) {
         if (!$(this).length) {
            return $(this);
         }
         var instance = $(this).data(PLUGIN_NS);

         // CASE: action method (public method on PLUGIN class)        
         if (instance
            && methodOrOptions.indexOf('_') != 0
            && instance[methodOrOptions]
            && typeof (instance[methodOrOptions]) == 'function') {

            return instance[methodOrOptions](Array.prototype.slice.call(arguments, 1));


            // CASE: argument is options object or empty = initialise            
         } else if (typeof methodOrOptions === 'object' || !methodOrOptions) {

            instance = new Plugin($(this), methodOrOptions);    // ok to overwrite if this is a re-init
            $(this).data(PLUGIN_NS, instance);
            return $(this);

            // CASE: method called before init
         } else if (!instance) {
            $.error('Plugin must be initialised before using method: ' + methodOrOptions);

            // CASE: invalid method
         } else if (methodOrOptions.indexOf('_') == 0) {
            $.error('Method ' + methodOrOptions + ' is private!');
         } else {
            $.error('Method ' + methodOrOptions + ' does not exist.');
         }
      };
   })(jQuery);

   /* Initialize validation */
   var payment_form = $('#payment-stripe').paymentForm();

   $('#validate').on('click', function () {
      var valid = $('#payment-stripe').paymentForm('valid');
      if (valid)
         alert('CC info is good!');
      else
         alert('Badman Cardfaker');
   });


})
