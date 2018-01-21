/*
 * construnctor
 *
 * @para {Dom} parentSelector
 * @para {Dom} selector
 * @para {str} password
 * @para {str} btnText
 * @para {str} errorMessage
 */

var Password = function(parentSelector, selector, password, btnText, errorMessage) {
    this.targetParent = document.querySelector(parentSelector);
    this.target = document.querySelector(selector);
    this.password = password;
    this.btnText = btnText;
    this.errorMessage = errorMessage;
    this.addPassword();
};


/*
 * add password element to target
 *
 * @para {str} btnText
 */

Password.prototype.addPassword = function() {
    const passwordElement = document.createElement('div');
        passwordElement.className = 'password-container';

    const passwordInput = document.createElement('input');
        passwordInput.type = 'password';
        passwordInput.className = 'password-input';
    const passwordSumbitBtn = document.createElement('input');
        passwordSumbitBtn.type = 'submit';
        passwordSumbitBtn.className = 'password-button';
        passwordSumbitBtn.innerHTML = this.btnText;
        addEvent(passwordSumbitBtn, 'click', function(){
            this.validPassword(passwordInput.value, passwordElement);
        }.bind(this));
    addEvent(window, 'keypress', function(event) {
        event.key === 'Enter' ?
            this.validPassword(passwordInput.value, this.password, passwordElement) : false;
    }.bind(this));
    passwordElement.appendChild(passwordInput);
    passwordElement.appendChild(passwordSumbitBtn);
    this.targetParent.insertBefore(passwordElement, this.target);
};

/*
 * valid password
 *
 * @para {str} input
 * @para {Dom} passwordEle
 */

Password.prototype.validPassword = function(input, passwordEle) {
    if(input === this.password) {
        window.location.href = this.target.getAttribute('href');
    } else {
        if(passwordEle.childElementCount > 2) {
            return;
        }
        const passwordWrong = document.createElement("div");
              passwordWrong.innerHTML = this.errorMessage;
              passwordWrong.className = 'password-error-message';
        passwordEle.appendChild(passwordWrong);
    }

};