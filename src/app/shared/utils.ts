declare var jQuery: any;
declare var swal: any;

export class Utils {


  public static zero(n: number) {
    if (n < 10) {
      return '0' + n;
    }
    return n;
  }

  static configDataTables() {
    jQuery.extend(jQuery.fn.dataTable.defaults, {
      autoWidth: false,
      columnDefs: [{
        orderable: false,
        width: '100px',
        targets: [5]
      }],
      dom: '<"datatable-header"fl><"datatable-scroll"t><"datatable-footer"ip>',
      language: {
        search: '<span>Filter:</span> _INPUT_',
        lengthMenu: '<span>Show:</span> _MENU_',
        paginate: {'first': 'First', 'last': 'Last', 'next': '&rarr;', 'previous': '&larr;'}
      },
      drawCallback: function () {
        jQuery(this).find('tbody tr').slice(-3).find('.dropdown, .btn-group').addClass('dropup');
      },
      preDrawCallback: function () {
        jQuery(this).find('tbody tr').slice(-3).find('.dropdown, .btn-group').removeClass('dropup');
      }
    });
  }


  private static groupBy(xs, key) {
    return xs.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }

  static initializeDataTables(timeout: number, columnNumber: number, classdata: string) {
    // Basic datatable
    const tableListStation = jQuery('.' + classdata);
    if (jQuery.fn.DataTable.isDataTable('.' + classdata)) {
      tableListStation.dataTable().fnDestroy();
    }
    setTimeout(function () {
      tableListStation.DataTable({
           dom: 'Bfrtip',
            language: {
              'emptyTable': '...'
            },
        buttons: [
          { extend: 'copyHtml5', footer: true, className: 'btn'},
          { extend: 'excelHtml5', footer: true, className: 'btn'},
          { extend: 'print', footer: true, className: 'btn' },
          { extend: 'pdfHtml5', footer: true, className: 'btn' }
          ]
        , columnDefs: [{
          targets: [columnNumber - 1]
        }]
      });
    }, timeout);
  }

  static initializeSliders(timeout: number) {
    // Basic datatable
    setTimeout(function () {
      jQuery(document).ready(function() {
        jQuery('#slideshow').nivoSlider();
        jQuery('#content .featured_carousel').flexslider({
          animation: 'slide',
          animationLoop: false,
          slideshow: false,
          itemWidth: 210,
          minItems: 5, // use function to pull in initial value
          maxItems: 5 // use function to pull in initial value
        });
        // tslint:disable-next-line:max-line-length
        jQuery('#product-tab .featured_carousel_tab, #product-tab .latest_carousel_tab, #product-tab .bestseller_carousel_tab, #product-tab .special_carousel_tab').flexslider({
          animation: 'slide',
          animationLoop: false,
          slideshow: false,
          itemWidth: 210,
          minItems: 5,
          maxItems: 5,
          start: function() {
            jQuery('#product-tab .tab_content').addClass('deactive');
            jQuery('#product-tab .tab_content:first').removeClass('deactive');
          } });
        jQuery('ul#tabs li:first').addClass('active').show();
        jQuery('ul#tabs li').click(function() {
          jQuery('ul#tabs li').removeClass('active');
          jQuery(this).addClass('active');
          jQuery('#product-tab .tab_content').hide();
          const activeTab = jQuery(this).find('a').attr('href');
          jQuery(activeTab).fadeIn();
          return false;
        });
      });
    }, timeout);
  }

  static convertDate(date: string) {
    if (date) {
      console.log(date.substring(8, 10) + '/' + date.substring(5, 7) + '/' + date.substring(0, 4) + date.substring(10));
      return date.substring(8, 10) + '/' + date.substring(5, 7) + '/' + date.substring(0, 4) + date.substring(10);
    }
    return null;
  }

  static convertTime(time: string) {
    if (time) {
      return time.substring(0, 5);
    }
    return null;
  }

  static convertRealDate(date: string, time?: string) {
    if (date) {
      console.log(date);

      console.log(date.substring(0, 2), date.substring(3, 5), date.substring(6, 10));
      if (!time) {
        return new Date(+date.substring(6, 10), (+date.substring(3, 5) - 1), +date.substring(0, 2));
      } else {
        return new Date(+date.substring(6, 10), (+date.substring(3, 5) - 1), +date.substring(0, 2), +time.substring(0, 2), +time.substring(3, 5));
      }
    }
    return null;
  }

  static initializeClickNavBar(timeout: number) {
    setTimeout(function () {
      jQuery('.has_sub a').on('click', function () {
        console.log('Click 2 !!!');

        if (!jQuery(this).hasClass('subdrop')) {
          // hide any open menus and remove all other classes
          jQuery('ul', jQuery(this).parents('ul:first')).slideUp(350);
          jQuery('a', jQuery(this).parents('ul:first')).removeClass('subdrop');
          jQuery('#sidebar-menu .pull-right i').removeClass('md-remove').addClass('md-add');

          // open our new menu and add the open class
          jQuery(this).next('ul').slideDown(350);
          jQuery(this).addClass('subdrop');
          jQuery('.pull-right i', jQuery(this).parents('.has_sub:last')).removeClass('md-add').addClass('md-remove');
          jQuery('.pull-right i', jQuery(this).siblings('ul')).removeClass('md-remove').addClass('md-add');
        } else if (jQuery(this).hasClass('subdrop')) {
          jQuery(this).removeClass('subdrop');
          jQuery(this).next('ul').slideUp(350);
          jQuery('.pull-right i', jQuery(this).parent()).removeClass('md-remove').addClass('md-add');
        }
      });
    }, timeout);
  }

  static initializeScroll(timeout: number) {
    setTimeout(function () {
      jQuery('.slimscrollleft').slimScroll({
        height: 'auto',
        position: 'right',
        size: '5px',
        color: '#dcdcdc',
        wheelStep: 5
      });
    }, timeout);
  }

  static sweetAlert(title: string, content: string, type: string) {
    swal({
      title: title,
      text: content,
      type: type,
      button: 'OK!',
    });
  }
}

export class InitialPreviewConfig {
  caption?: string;
  size?: number;
  width?: string;
  type?: string;
  filetype?: string;
  url: string;
  key: number;
}
