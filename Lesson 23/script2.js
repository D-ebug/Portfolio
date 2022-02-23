// 2
    let password = '12345678',
        illegals = Boolean,
        maxlength = 8;
        function checkPasswordForIllegal() {
            for (let i = 0; i < 9; i++) {
                for (let i2 = 0; i2 < 3; i2++) {
                    let illegalSymbols = ["?", "%", ";", "№"];
                    if (password[i] === illegalSymbols[i2]) {
                        illegals = true;
                    }
                }
            }
            if (illegals === true) {
                console.log('Your password contains illegal characters (?, %, ;, №)');
            }
            else {
                if (password.length < maxlength) {
                    console.log('Your password contains too much symbols (8 symbols max)');
                }
                else {
                    console.log('Your password is ok');
                }
            }
        }