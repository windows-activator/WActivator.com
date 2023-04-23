const windowstr = document.getElementById('windows-tr');
      const textArray = ['windows 11', 'windows 10', 'windows 8'];
      let index = 0;

      function changeText() {
        windowstr.style.opacity = 0; 
        setTimeout(() => {
            windowstr.innerHTML = textArray[index];
          index++;
          if (index >= textArray.length) {
            index = 0;
          }
          windowstr.style.opacity = 1; 
        }, 100); 
        setTimeout(changeText, 2000);
      }

      changeText();