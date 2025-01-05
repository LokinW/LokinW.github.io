class Ttip_CopyInvite{
    constructor(_nmbr) {
        this.ttipInviteToCopy = document.querySelector(`#copy-text-tooltip${_nmbr}`);
        this.button = document.querySelector(`.v_btn${_nmbr}`);
        this.timeoutId = null;
        this._active = false;
    }

    setupTooltips() {
        this.activate();
        this.button.addEventListener('mouseenter', () => {
            if (this.active) {
                this.delayedShow();
            }
        })
        this.button.addEventListener('mouseleave', () => {
            if (this.active) {
                this.hide();
                this.cancelDelayedShow();
            }
        })
        this.button.addEventListener('click', () => {
            if (this.active) {
                this.deactivate();
            }
        })
    }

    get active() {
        return this._active;
    }

    activate = () => {
        this._active = true;
    }
    deactivate = () => {
        this._active = null;
        this.hide();
        clearTimeout(this.timeoutId); 
        setTimeout( () => {
            this.activate();
        }, 25000) 
    }

    delayedShow = () => {
        this.timeoutId = setTimeout(() => {
                this.show();
        }, 500);
    }
    show = () => {
        if (this.ttipInviteToCopy.classList.contains("hide")) {
            this.ttipInviteToCopy.classList.remove("hide");
        }
        this.ttipInviteToCopy.classList.add("show");
    }
    hide = () => {
        if (this.ttipInviteToCopy.classList.contains("show")) {
            this.ttipInviteToCopy.classList.remove("show");
        }
        this.ttipInviteToCopy.classList.add("hide");
    }
    cancelDelayedShow = () => {
        clearTimeout(this.timeoutId);
    }
}

class Ttip_CopyConfirmation {
    constructor (_nmbr) {
        this.ttipConfirmCopy = document.querySelector(`#copy-complete-tooltip${_nmbr}`);
        this.button = document.querySelector(`.v_btn${_nmbr}`);
        this.timeoutId = null;
    }

    setupTooltips = () => {
        this.button.addEventListener('click', () => {
                this.show();
        })
    }

    show = () => {
        if (this.ttipConfirmCopy.classList.contains("hide")) {
            this.ttipConfirmCopy.classList.remove("hide");
        }
        this.ttipConfirmCopy.classList.add("show");
        setTimeout(() => {
            this.ttipConfirmCopy.classList.remove("show");
        }, 1500)
    }
}

class Icon_Animation {
    constructor(_nmbr){
        this.button = document.querySelector(`.v_btn${_nmbr}`);
        this.copyicon = document.querySelector(`#btn${_nmbr}-copy`);
        this.checkicon = document.querySelector(`#btn${_nmbr}-check`);
    }

    setupAnimation() {
        this.showCopy();
        this.button.addEventListener('click', () => {
            this.showCheck();
        })
    }

    showCopy = () => {
        if (this.copyicon.classList.contains("hideIcon")) {
            this.copyicon.classList.remove("hideIcon");
        }
        this.copyicon.classList.add("showIcon");
        if (this.checkicon.classList.contains("showIcon")) {
            this.checkicon.classList.remove("showIcon");
        }
        this.checkicon.classList.add("hideIcon");
    }

    showCheck = () => {
        if (this.checkicon.classList.contains("hideIcon")) {
            this.checkicon.classList.remove("hideIcon");
        }
        this.checkicon.classList.add("showIcon");
        if (this.copyicon.classList.contains("showIcon")) {
            this.checkicon.classList.remove("showIcon");
        }
        this.copyicon.classList.add("hideIcon");
        setTimeout(() => {
            this.showCopy();
        }, 25000)
    }
}

class CopyButton {
    constructor(_nmbr){
        this.nmbr = _nmbr;
        this.button = document.querySelector(`.v_btn${_nmbr}`);
        this.text = document.querySelector(`#text${_nmbr}`).innerText;
    }   

    setupCopyButton = () => {
        this.button.addEventListener('click', () => {
            this.copyText();
        })
    }

    copyText = () => {
        console.log(this.text);
        navigator.clipboard
        .writeText(this.text)
        .then(() => {
            if(this.nmbr == '1') {
                tooltipConfirm1.show();
                icon2.showCopy();
            } else if (this.nmbr == '2'){
                tooltipConfirm2.show();
                icon1.showCopy();
            }
        })
        .catch(() => {
          alert("Kopieren ist fehlgeschlagen.");
        });
    }
}

let tooltipCopy1 = new Ttip_CopyInvite(1);
let tooltipConfirm1 = new Ttip_CopyConfirmation(1);
let icon1 = new Icon_Animation(1);
let btn1 = new CopyButton(1);
tooltipCopy1.setupTooltips();
icon1.setupAnimation();
btn1.setupCopyButton();
let tooltipCopy2 = new Ttip_CopyInvite(2);
let tooltipConfirm2 = new Ttip_CopyConfirmation(2);
let icon2 = new Icon_Animation(2);
let btn2 = new CopyButton(2);
tooltipCopy2.setupTooltips();
icon2.setupAnimation();
btn2.setupCopyButton();