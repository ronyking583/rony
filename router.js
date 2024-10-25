document.addEventListener('DOMContentLoaded', function () {
  function loadPageContent(page) {
    fetch(page)
      .then(response => {
        if (!response.ok) {
          throw new Error('Page not found');
        }
        return response.text();
      })
      .then(data => {
        document.getElementById('content').innerHTML = data;
      })
      .catch(error => {
        document.getElementById('content').innerHTML = '<p>Page not found.</p>';
      });
  }

  function handleRouting() {
    const path = window.location.pathname.split('/').pop();

    switch (path) {
      case 'NPTEL24ME48S106440041630375385':
        loadPageContent('NPTEL24ME48S106440041630375385.html');
        break;
      case 'NPTEL24ME48S106440041630375386':
        loadPageContent('NPTEL24ME48S106440041630375386.html');
        break;
      case 'NPTEL24ME48S106440041630375387':
        loadPageContent('NPTEL24ME48S106440041630375387.html');
        break;
      case 'NPTEL24ME48S106440041630375388':
        loadPageContent('NPTEL24ME48S106440041630375388.html');
        break;
      case 'NPTEL24ME48S106440041630375389':
        loadPageContent('NPTEL24ME48S106440041630375389.html');
        break;
      case 'NPTEL24ME48S106440041630375390':
        loadPageContent('NPTEL24ME48S106440041630375390.html');
        break;
      case 'NPTEL24ME48S106440041630375391':
        loadPageContent('NPTEL24ME48S106440041630375391.html');
        break;
      case 'NPTEL24ME48S106440041630375392':
        loadPageContent('NPTEL24ME48S106440041630375392.html');
        break;
      case 'NPTEL24ME48S106440041630375393':
        loadPageContent('NPTEL24ME48S106440041630375393.html');
        break;
      case 'NPTEL24ME48S106440041630375394':
        loadPageContent('NPTEL24ME48S106440041630375394.html');
        break;
      case 'NPTEL24ME48S106440041630375395':
        loadPageContent('NPTEL24ME48S106440041630375395.html');
        break;
      case 'NPTEL24ME48S106440041630375396':
        loadPageContent('NPTEL24ME48S106440041630375396.html');
        break;
      case 'NPTEL24ME48S106440041630375397':
        loadPageContent('NPTEL24ME48S106440041630375397.html');
        break;
      case 'NPTEL24ME48S106440041630375398':
        loadPageContent('NPTEL24ME48S106440041630375398.html');
        break;
      case 'NPTEL24ME48S106440041630375399':
        loadPageContent('NPTEL24ME48S106440041630375399.html');
        break;
      case 'NPTEL24ME48S106440041630375400':
        loadPageContent('NPTEL24ME48S106440041630375400.html');
        break;
      case 'NPTEL24ME48S106440041630375401':
        loadPageContent('NPTEL24ME48S106440041630375401.html');
        break;
      case 'NPTEL24ME48S106440041630375402':
        loadPageContent('NPTEL24ME48S106440041630375402.html');
        break;
      case 'NPTEL24ME48S106440041630375403':
        loadPageContent('NPTEL24ME48S106440041630375403.html');
        break;
      case 'NPTEL24ME48S106440041630375404':
        loadPageContent('NPTEL24ME48S106440041630375404.html');
        break;
      case 'NPTEL24ME48S106440041630375405':
        loadPageContent('NPTEL24ME48S106440041630375405.html');
        break;
      case 'NPTEL24ME48S106440041630375406':
        loadPageContent('NPTEL24ME48S106440041630375406.html');
        break;
      default:
        document.getElementById('content').innerHTML = '<h2 style="color:red; font-family:sans-serif">Record not found!</h2>';
    }
  }

  window.addEventListener('popstate', handleRouting);
  handleRouting();
});
