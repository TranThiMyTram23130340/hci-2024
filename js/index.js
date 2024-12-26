 // Detailed information about members
 const members = {
    "RM": {
        name: "RM (Kim Nam-joon)",
        birthdate: "12/09/1994",
        position: "Leader, Main Rapper",
        info: "RM is known for his exceptional rap talent and leadership skills. He is also the main songwriter for many of BTS's songs."
    },
    "Jin": {
        name: "Jin (Kim Seok-jin)",
        birthdate: "04/12/1992",
        position: "Main Vocalist, Visual",
        info: "Jin is the oldest member of the group and is known for his handsome looks as well as his warm singing voice."
    },
    "Suga": {
        name: "Suga (Min Yoon-gi)",
        birthdate: "09/03/1993",
        position: "Rapper, Music Producer",
        info: "Suga is one of the talented rappers and a prominent music producer. He also has a solo project named Agust D."
    },
    "J-Hope": {
        name: "J-Hope (Jung Ho-seok)",
        birthdate: "18/02/1994",
        position: "Rapper, Main Dancer",
        info: "J-Hope is known for his outstanding dancing skills and is one of the rappers with a distinctive style in BTS."
    },
    "Jimin": {
        name: "Jimin (Park Ji-min)",
        birthdate: "13/10/1995",
        position: "Vocalist, Dancer",
        info: "Jimin stands out with his sweet voice and excellent dancing ability. He also has a large fan base due to his friendly and approachable nature."
    },
    "V": {
        name: "V (Kim Tae-hyung)",
        birthdate: "30/12/1995",
        position: "Vocalist",
        info: "V is loved for his deep voice and striking appearance. He is also one of the creative minds behind the group's music videos."
    },
    "Jungkook": {
        name: "Jungkook (Jeon Jung-kook)",
        birthdate: "01/09/1997",
        position: "Main Vocalist, Dancer, Maknae",
        info: "Jungkook is the youngest member of the group but possesses a powerful voice and diverse talents, from singing to dancing and music production."
    }
};

// Function to search and display member information
function searchMember() {
    const searchValue = document.getElementById("member-search").value;
    const memberInfo = document.getElementById("member-info");

    if (members[searchValue]) {
        const member = members[searchValue];
        memberInfo.innerHTML = `
            <h4>${member.name}</h4>
            <p><strong>Birthdate:</strong> ${member.birthdate}</p>
            <p><strong>Position:</strong> ${member.position}</p>
            <p><strong>Additional Info:</strong> ${member.info}</p>
        `;
    } else {
        memberInfo.innerHTML = `
            <h4>Information about the member will be displayed here</h4>
            <p>Please enter the name of a BTS member to see detailed information.</p>
        `;
    }
}