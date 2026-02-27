                    document.querySelectorAll('.nps-rate-box').forEach(button => {
                      button.addEventListener('click', function() {
                        document.querySelectorAll('.nps-rate-box').forEach(b => b.classList.remove('selected'));
                        this.classList.add('selected');
                      });
                    });