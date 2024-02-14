// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

if (document.getElementById('userResume')) {
    const filesTitles = document.querySelectorAll('.details-application__subtitle'),
          filesConditions = document.querySelectorAll('.details-application__conditions');

    const userResume = document.getElementById('userResume');
    const previewFileResume = document.getElementById('previewFileResume');
    userResume.addEventListener('change', () => {
        uploadFile(userResume.files[0], previewFileResume, userResume, filesTitles[0], filesConditions[0]);
        // console.log(userResume.files[0])
    });

    const userGovtFron = document.getElementById('userGovtFron');
    const previewFileGovtFront = document.getElementById('previewFileGovtFront');
    userGovtFron.addEventListener('change', () => {
        uploadFile(userGovtFron.files[0], previewFileGovtFront, userGovtFron, filesTitles[1], filesConditions[1]);
        // console.log(userResume.files[0])
    });

    const userGovtBack = document.getElementById('userGovtBack');
    const previewFileGovtBack = document.getElementById('previewFileGovtBack');
    userGovtBack.addEventListener('change', () => {
        uploadFile(userGovtBack.files[0], previewFileGovtBack, userGovtBack, filesTitles[2], filesConditions[2]);
        // console.log(userResume.files[0])
    });

    function uploadFile(file, preview, input, title, descr) {
        console.log(file.type);
        // проверяем тип файла
        if (!['image/jpeg', 'application/pdf', 'image/png', 'application/msword'].includes(file.type)) {
            alert('Разрешены только изображения.');
            input.value = '';
            return;
        }
        // Проверяем размер файла (<2 Мб)
        if (file.size > 2 * 1024 * 1024) {
            alert('Файл должен быть менее 2 МБ.');
            return;
        }

        let reader = new FileReader();
        reader.onload = function(e) {
            title.textContent = 'File added';
            descr.textContent = '';
            preview.classList.add('active');
            
            // ['image/jpeg', 'application/pdf', 'image/png', 'application/msword'].includes(file.type)
            if (['image/jpeg', 'image/png'].includes(file.type)) {
                preview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
            } else if ('application/pdf'.includes(file.type)) {
                preview.innerHTML = `<img src="img/form-jobs/pdf.png" alt="Pdf">`;
            } else if ('application/msword'.includes(file.type)) {
                preview.innerHTML = `<img src="img/form-jobs/word.png" alt="Word">`;
            }
        };
        reader.onerror = function (e) {
            alert('Ошибка');
        };
        reader.readAsDataURL(file);
    }
}

