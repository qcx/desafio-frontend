const About = () => {

    var sectionAbout = document.createElement('section');
    sectionAbout.classList.add('about');
    sectionAbout.id ='about'
    document.body.appendChild(sectionAbout);

    var about = document.getElementById('about');

    const pText = [
        {
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non quam lacus suspendisse faucibus. Condimentum vitae sapien pellentesque habitant morbi. Sed odio morbi quis commodo odio. Egestas dui id ornare arcu odio ut. Quis ipsum suspendisse ultrices gravida dictum. Maecenas ultricies mi eget mauris pharetra. Iaculis nunc sed augue lacus viverra vitae congue. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Nunc consequat interdum varius sit amet mattis. Dictum non consectetur a erat nam at lectus. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. Amet luctus venenatis lectus magna fringilla. Arcu risus quis varius quam. Sapien pellentesque habitant morbi tristique senectus et netus. Donec adipiscing tristique risus nec feugiat in.'
        },
        {
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non quam lacus suspendisse faucibus. Condimentum vitae sapien pellentesque habitant morbi. Sed odio morbi quis commodo odio. Egestas dui id ornare arcu odio ut. Quis ipsum suspendisse ultrices gravida dictum. Maecenas ultricies mi eget mauris pharetra. Iaculis nunc sed augue lacus viverra vitae congue. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Nunc consequat interdum varius sit amet mattis. Dictum non consectetur a erat nam at lectus. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. Amet luctus venenatis lectus magna fringilla. Arcu risus quis varius quam. Sapien pellentesque habitant morbi tristique senectus et netus. Donec adipiscing tristique risus nec feugiat in.'
        },
        {
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non quam lacus suspendisse faucibus. Condimentum vitae sapien pellentesque habitant morbi. Sed odio morbi quis commodo odio. Egestas dui id ornare arcu odio ut. Quis ipsum suspendisse ultrices gravida dictum. Maecenas ultricies mi eget mauris pharetra. Iaculis nunc sed augue lacus viverra vitae congue. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Nunc consequat interdum varius sit amet mattis. Dictum non consectetur a erat nam at lectus. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. Amet luctus venenatis lectus magna fringilla. Arcu risus quis varius quam. Sapien pellentesque habitant morbi tristique senectus et netus. Donec adipiscing tristique risus nec feugiat in.'
        },
        {
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non quam lacus suspendisse faucibus. Condimentum vitae sapien pellentesque habitant morbi. Sed odio morbi quis commodo odio. Egestas dui id ornare arcu odio ut. Quis ipsum suspendisse ultrices gravida dictum. Maecenas ultricies mi eget mauris pharetra. Iaculis nunc sed augue lacus viverra vitae congue. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Nunc consequat interdum varius sit amet mattis. Dictum non consectetur a erat nam at lectus. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. Amet luctus venenatis lectus magna fringilla. Arcu risus quis varius quam. Sapien pellentesque habitant morbi tristique senectus et netus. Donec adipiscing tristique risus nec feugiat in.'
        }
    ]
  
    var content = '<article><h3>Sobre</h3>'
    pText.forEach(p => {
        var pContent = `<p>${p.content}</p>`;
        content += pContent;
    });

    content += '</article>'
    about.innerHTML = content;
};

export default About;