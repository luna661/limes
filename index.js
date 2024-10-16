homeLink.addEventListener('click', function (e) {
    e.preventDefault();
    profileSection.style.display = 'none';
    avatarContainer.style.display = 'block';
});

profileLink.addEventListener('click', function (e) {
    e.preventDefault();

    profileSection.style.display = 'block';
    avatarContainer.style.display = 'none';
});

webhookspamLink.addEventListener('click', function (e) {
    e.preventDefault();
    profileSection.style.display = 'none';
    avatarContainer.style.display = 'none';
    alert('WebhookSpam ページはまだ実装されていません。');
});

window.onload = function () {
    homeLink.click();
};
a