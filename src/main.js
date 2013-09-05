(function (xtag) {
    xtag.register('x-eraser', {
        lifecycle: {
            created: function created() {
                this._eraser = document.createElement('div');
                this._eraser.setAttribute('class','eraser');
                this.appendChild(this._eraser);
            },
            inserted: function inserted() {
            },
            removed: function removed() {
            },
            attributeChanged: function attributedChanged(attribute) {

            }
        },
        events : {
            click : function(e) {
                e.stopPropagation();
                e.preventDefault();
                var evt = new CustomEvent('erased', {
                    'bubbles': true
                });
                this.dispatchEvent(evt);
            }
        }
    });

}(xtag));