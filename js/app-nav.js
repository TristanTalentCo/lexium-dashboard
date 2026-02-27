document.querySelectorAll('.app-nav-btn').forEach(btn => {
                        btn.addEventListener('click', function() {
                          const targetId = this.getAttribute('data-target');
                          
                          document.querySelectorAll('.app-section').forEach(section => {
                            section.style.display = 'none';
                          });
                          
                          document.querySelectorAll('.app-nav-btn').forEach(b => {
                            b.classList.remove('active');
                          });
                          
                          document.getElementById(targetId).style.display = 'flex';
                          this.classList.add('active');
                        });
                      });
                      
                      document.querySelector('[data-target="appsec01"]').click();