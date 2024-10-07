<script>
    const profileImage = document.getElementById('profileImage');
    const intro = document.getElementById('intro');

    profileImage.addEventListener('click', () => {
        profileImage.classList.toggle('zoom'); // Toggle zoom class
        intro.classList.toggle('show'); // Toggle intro visibility
    });
</script>
