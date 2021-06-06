(function($) {
    "use strict"

    //primary alerts
    $('.primary-alert-left-top').on('click', function() {
        $.notify({
            // options
            message: 'Congratulations! You\'ve succcessfully completed the task.' 
        },{
            // settings
            type: 'primary', 
            offset: 20,
            spacing: 5,
            z_index: 1031,
            delay: 5000,
            timer: 1000,
            placement: {
                from: 'top', 
                align: 'left'
            },
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
            }
        });
    });

    $('.primary-alert-right-top').on('click', function() {
        $.notify({
            // options
            message: 'Congratulations! You\'ve succcessfully completed the task.' 
        },{
            // settings
            type: 'primary', 
            offset: {
                y: 20, 
                x: 320
            },
            spacing: 5,
            z_index: 1031,
            delay: 5000,
            timer: 1000,
            placement: {
                from: 'top', 
                align: 'right'
            },
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
            }
        });
    });

    $('.primary-alert-right-bottom').on('click', function() {
        $.notify({
            // options
            message: 'Congratulations! You\'ve succcessfully completed the task.' 
        },{
            // settings
            type: 'primary', 
            offset: {
                y: 20, 
                x: 320
            },
            spacing: 5,
            z_index: 1031,
            delay: 5000,
            timer: 1000,
            placement: {
                from: 'bottom', 
                align: 'right'
            },
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
            }
        });
    });

    $('.primary-alert-left-bottom').on('click', function() {
        $.notify({
            // options
            message: 'Congratulations! You\'ve succcessfully completed the task.' 
        },{
            // settings
            type: 'primary', 
            offset: {
                y: 20, 
                x: 20
            },
            spacing: 5,
            z_index: 1031,
            delay: 5000,
            timer: 1000,
            placement: {
                from: 'bottom', 
                align: 'left'
            },
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
            }
        });
    });

    $('.primary-alert-center-top').on('click', function() {
        $.notify({
            // options
            message: 'Congratulations! You\'ve succcessfully completed the task.' 
        },{
            // settings
            type: 'primary', 
            offset: {
                y: 20, 
                x: 0
            },
            spacing: 5,
            z_index: 1031,
            delay: 5000,
            timer: 1000,
            placement: {
                from: 'top', 
                align: 'center'
            },
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
            }
        });
    });

    $('.primary-alert-center-bottom').on('click', function() {
        $.notify({
            // options
            message: 'Congratulations! You\'ve succcessfully completed the task.' 
        },{
            // settings
            type: 'primary', 
            offset: {
                y: 20, 
                x: 0
            },
            spacing: 5,
            z_index: 1031,
            delay: 5000,
            timer: 1000,
            placement: {
                from: 'bottom', 
                align: 'center'
            },
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
            }
        });
    });



    //success alerts
    $('.success-alert-left-top').on('click', function() {
        $.notify({
            // options
            message: 'Congratulations! You\'ve succcessfully completed the task.' 
        },{
            // settings
            type: 'success', 
            offset: 20,
            spacing: 5,
            z_index: 1031,
            delay: 5000,
            timer: 1000,
            placement: {
                from: 'top', 
                align: 'left'
            },
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
            }
        });
    });

    $('.success-alert-right-top').on('click', function() {
        $.notify({
            // options
            message: 'Congratulations! You\'ve succcessfully completed the task.' 
        },{
            // settings
            type: 'success', 
            offset: {
                y: 20, 
                x: 320
            },
            spacing: 5,
            z_index: 1031,
            delay: 5000,
            timer: 1000,
            placement: {
                from: 'top', 
                align: 'right'
            },
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
            }
        });
    });

    $('.success-alert-right-bottom').on('click', function() {
        $.notify({
            // options
            message: 'Congratulations! You\'ve succcessfully completed the task.' 
        },{
            // settings
            type: 'success', 
            offset: {
                y: 20, 
                x: 320
            },
            spacing: 5,
            z_index: 1031,
            delay: 5000,
            timer: 1000,
            placement: {
                from: 'bottom', 
                align: 'right'
            },
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
            }
        });
    });

    $('.success-alert-left-bottom').on('click', function() {
        $.notify({
            // options
            message: 'Congratulations! You\'ve succcessfully completed the task.' 
        },{
            // settings
            type: 'success', 
            offset: {
                y: 20, 
                x: 20
            },
            spacing: 5,
            z_index: 1031,
            delay: 5000,
            timer: 1000,
            placement: {
                from: 'bottom', 
                align: 'left'
            },
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
            }
        });
    });

    $('.success-alert-center-top').on('click', function() {
        $.notify({
            // options
            message: 'Congratulations! You\'ve succcessfully completed the task.' 
        },{
            // settings
            type: 'success', 
            offset: {
                y: 20, 
                x: 0
            },
            spacing: 5,
            z_index: 1031,
            delay: 5000,
            timer: 1000,
            placement: {
                from: 'top', 
                align: 'center'
            },
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
            }
        });
    });

    $('.success-alert-center-bottom').on('click', function() {
        $.notify({
            // options
            message: 'Congratulations! You\'ve succcessfully completed the task.' 
        },{
            // settings
            type: 'success', 
            offset: {
                y: 20, 
                x: 0
            },
            spacing: 5,
            z_index: 1031,
            delay: 5000,
            timer: 1000,
            placement: {
                from: 'bottom', 
                align: 'center'
            },
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
            }
        });
    });



    //warning alets
    $('.warning-alert-left-top').on('click', function() {
        $.notify({
            // options
            message: 'Congratulations! You\'ve succcessfully completed the task.' 
        },{
            // settings
            type: 'warning', 
            offset: 20,
            spacing: 5,
            z_index: 1031,
            delay: 5000,
            timer: 1000,
            placement: {
                from: 'top', 
                align: 'left'
            },
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
            }
        });
    });

    $('.warning-alert-right-top').on('click', function() {
        $.notify({
            // options
            message: 'Congratulations! You\'ve succcessfully completed the task.' 
        },{
            // settings
            type: 'warning', 
            offset: {
                y: 20, 
                x: 320
            },
            spacing: 5,
            z_index: 1031,
            delay: 5000,
            timer: 1000,
            placement: {
                from: 'top', 
                align: 'right'
            },
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
            }
        });
    });

    $('.warning-alert-right-bottom').on('click', function() {
        $.notify({
            // options
            message: 'Congratulations! You\'ve succcessfully completed the task.' 
        },{
            // settings
            type: 'warning', 
            offset: {
                y: 20, 
                x: 320
            },
            spacing: 5,
            z_index: 1031,
            delay: 5000,
            timer: 1000,
            placement: {
                from: 'bottom', 
                align: 'right'
            },
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
            }
        });
    });

    $('.warning-alert-left-bottom').on('click', function() {
        $.notify({
            // options
            message: 'Congratulations! You\'ve succcessfully completed the task.' 
        },{
            // settings
            type: 'warning', 
            offset: {
                y: 20, 
                x: 20
            },
            spacing: 5,
            z_index: 1031,
            delay: 5000,
            timer: 1000,
            placement: {
                from: 'bottom', 
                align: 'left'
            },
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
            }
        });
    });

    $('.warning-alert-center-top').on('click', function() {
        $.notify({
            // options
            message: 'Congratulations! You\'ve succcessfully completed the task.' 
        },{
            // settings
            type: 'warning', 
            offset: {
                y: 20, 
                x: 0
            },
            spacing: 5,
            z_index: 1031,
            delay: 5000,
            timer: 1000,
            placement: {
                from: 'top', 
                align: 'center'
            },
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
            }
        });
    });

    $('.warning-alert-center-bottom').on('click', function() {
        $.notify({
            // options
            message: 'Congratulations! You\'ve succcessfully completed the task.' 
        },{
            // settings
            type: 'warning', 
            offset: {
                y: 20, 
                x: 0
            },
            spacing: 5,
            z_index: 1031,
            delay: 5000,
            timer: 1000,
            placement: {
                from: 'bottom', 
                align: 'center'
            },
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
            }
        });
    });





    //danger alets
    $('.danger-alert-left-top').on('click', function() {
        $.notify({
            // options
            message: 'Congratulations! You\'ve succcessfully completed the task.' 
        },{
            // settings
            type: 'danger', 
            offset: 20,
            spacing: 5,
            z_index: 1031,
            delay: 5000,
            timer: 1000,
            placement: {
                from: 'top', 
                align: 'left'
            },
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
            }
        });
    });

    $('.danger-alert-right-top').on('click', function() {
        $.notify({
            // options
            message: 'Congratulations! You\'ve succcessfully completed the task.' 
        },{
            // settings
            type: 'danger', 
            offset: {
                y: 20, 
                x: 320
            },
            spacing: 5,
            z_index: 1031,
            delay: 5000,
            timer: 1000,
            placement: {
                from: 'top', 
                align: 'right'
            },
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
            }
        });
    });

    $('.danger-alert-right-bottom').on('click', function() {
        $.notify({
            // options
            message: 'Congratulations! You\'ve succcessfully completed the task.' 
        },{
            // settings
            type: 'danger', 
            offset: {
                y: 20, 
                x: 320
            },
            spacing: 5,
            z_index: 1031,
            delay: 5000,
            timer: 1000,
            placement: {
                from: 'bottom', 
                align: 'right'
            },
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
            }
        });
    });

    $('.danger-alert-left-bottom').on('click', function() {
        $.notify({
            // options
            message: 'Congratulations! You\'ve succcessfully completed the task.' 
        },{
            // settings
            type: 'danger', 
            offset: {
                y: 20, 
                x: 20
            },
            spacing: 5,
            z_index: 1031,
            delay: 5000,
            timer: 1000,
            placement: {
                from: 'bottom', 
                align: 'left'
            },
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
            }
        });
    });

    $('.danger-alert-center-top').on('click', function() {
        $.notify({
            // options
            message: 'Congratulations! You\'ve succcessfully completed the task.' 
        },{
            // settings
            type: 'danger', 
            offset: {
                y: 20, 
                x: 0
            },
            spacing: 5,
            z_index: 1031,
            delay: 5000,
            timer: 1000,
            placement: {
                from: 'top', 
                align: 'center'
            },
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
            }
        });
    });

    $('.danger-alert-center-bottom').on('click', function() {
        $.notify({
            // options
            message: 'Congratulations! You\'ve succcessfully completed the task.' 
        },{
            // settings
            type: 'danger', 
            offset: {
                y: 20, 
                x: 0
            },
            spacing: 5,
            z_index: 1031,
            delay: 5000,
            timer: 1000,
            placement: {
                from: 'bottom', 
                align: 'center'
            },
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
            }
        });
    });







})(jQuery);