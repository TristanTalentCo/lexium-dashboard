const radioButtons = document.querySelectorAll('input[name="nps-question"]');
                          const textarea = document.getElementById('questionTextarea');

                          radioButtons.forEach(radio => {
                            radio.addEventListener('change', function() {
                              const optionText = this.nextElementSibling.textContent.trim();
                              textarea.value = optionText;
                              
                              document.querySelectorAll('.nps-q-option').forEach(option => {
                                option.classList.remove('selected');
                              });
                              this.closest('.nps-q-option').classList.add('selected');
                            });
                          });