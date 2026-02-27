document.querySelectorAll('.control-radio-input').forEach(input => {
                            input.addEventListener('change', function() {
                              document.querySelectorAll('.app-i-circle').forEach(circle => {
                                circle.classList.remove('active-state');
                              });
                              if(this.checked) {
                                this.nextElementSibling.classList.add('active-state');
                              }
                            });
                          });