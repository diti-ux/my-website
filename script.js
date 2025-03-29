// Këtu mund të shtoni linket M3U për kanalet që dëshironi të shfaqni
const channels = [
    { 
        name: "Kanal 1", 
        m3uLinks: [
            "http://example.com/kanali1_1.m3u", 
            "http://example.com/kanali1_2.m3u", 
            "http://example.com/kanali1_3.m3u"
        
        ]
    },
    { 
        name: "Kanal 2", 
        m3uLinks: [
            "http://example.com/kanali2_1.m3u", 
            "http://example.com/kanali2_2.m3u"
        ]
    },
    { 
        name: "Kanal 3", 
        m3uLinks: [
            "http://example.com/kanali3_1.m3u", 
            "http://example.com/kanali3_2.m3u"
        ]
    }
];

// Funksioni për të shfaqur kanalet në listë
function loadChannels() {
    const listElement = document.getElementById('channels-list');
    
    channels.forEach((channel, index) => {
        const listItem = document.createElement('li');
        const channelLink = document.createElement('a');
        channelLink.href = "#";
        channelLink.textContent = channel.name;
        channelLink.onclick = () => showM3ULinks(channel.m3uLinks, index); // Tregon linket M3U për kanalin
        listItem.appendChild(channelLink);
        listElement.appendChild(listItem);
    });
}

// Funksioni për të shfaqur linket M3U për kanalin e zgjedhur
function showM3ULinks(m3uLinks, index) {
    const linksContainer = document.getElementById('links-container');
    const m3uLinksList = document.getElementById('m3u-links-list');

    // Përsëri pastrojmë listën e linkeve M3U para se t'i shtojmë të reja
    m3uLinksList.innerHTML = '';

    // Shtojmë linket M3U në listë
    m3uLinks.forEach(link => {
        const listItem = document.createElement('li');
        const m3uLink = document.createElement('a');
        m3uLink.href = link;
        m3uLink.target = "_blank"; // Hap linkun në një dritare të re
        m3uLink.textContent = link;
        listItem.appendChild(m3uLink);
        m3uLinksList.appendChild(listItem);
    });

    // Trego linket M3U
    linksContainer.style.display = 'block';
}

// Funksioni për të shfaqur Kanalin 1 automatikisht kur faqja ngarkohet
function loadDefaultChannel() {
    const firstChannel = channels[0]; // Pasi Kanal 1 është kanali i parë në array
    showM3ULinks(firstChannel.m3uLinks);
}

// Thirrim funksionin për të ngarkuar kanalet kur faqja ngarkon
window.onload = function() {
    loadChannels();
    loadDefaultChannel(); // Shfaq Kanalin 1 automatikisht
};
