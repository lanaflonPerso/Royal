$().ready(function () {
    $("#registrationForm").validate({
        rules: {
            email: {
                required: true,
                minlength: 5,
                email: true
            }, username: {
                required: true,
                minlength: 5
            }, login: {
                required: true,
                minlength: 5
            }, password: {
                required: true,
                minlength: 5
            }, confirmPassword: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            }
        },
        messages: {
            email: {
                required: "Пожалуйста, введите электронную почту",
                minlength: "Электронная почта должна состоять минимум из 5 символов",
                email: "Пожалуйста, введите корректную электронную почту"
            },
            username: {
                required: "Пожалуйста, введите имя пользователя",
                minlength: "Имя пользователя должно состоять минимум из 5 символов"
            },
            login: {
                required: "Пожалуйста, введите логин",
                minlength: "Логин должен состоять минимум из 5 символов"
            },
            password: {
                required: "Пожалуйста, введите пароль",
                minlength: "Пароль должен состоять минимум из 5 символов"
            },
            confirmPassword: {
                required: "Пожалуйста, введите подтверждение пароля",
                minlength: "Пароль должен состоять минимум из 5 символов",
                equalTo: "Пожалуйста, правильно введите пароль еще раз"
            }
        },
        highlight: function (element, errorClass, validClass) {
            if ( element.type === "radio" ) {
                this.findByName( element.name ).addClass( errorClass ).removeClass( validClass );
                $(element).addClass('alert-danger');
                $(element).css('border', '1px solid red');
            } else {
                $(element).addClass( errorClass ).removeClass( validClass );
                $(element).addClass('alert-danger');
                $(element).css('border', '1px solid red');
            }
        },
        unhighlight: function (element, errorClass, validClass) {
            if ( element.type === "radio" ) {
                this.findByName( element.name ).removeClass( errorClass ).addClass( validClass );
                $(element).removeClass('alert-danger');
                $(element).css('border', '');
            } else {
                $( element ).removeClass( errorClass ).addClass( validClass );
                $(element).removeClass('alert-danger');
                $(element).css('border', '');
            }
        }
    });
});