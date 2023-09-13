document.addEventListener("DOMContentLoaded", function () {
    const signatureForm = document.getElementById("signatureForm");
    const modal = document.getElementById("myModal");
    const modalContent = document.getElementById("modalContent");
    const closeBtn = document.getElementsByClassName("close")[0];

    signatureForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const title = document.getElementById("title").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const logo = document.getElementById("logo").files[0];

        // Gere a assinatura em HTML com os dados fornecidos pelo usuário no formato especificado
        const signatureHTML = `
            <html xmlns:v="urn:schemas-microsoft-com:vml"
            xmlns:o="urn:schemas-microsoft-com:office:office"
            xmlns:w="urn:schemas-microsoft-com:office:word"
            xmlns:m="http://schemas.microsoft.com/office/2004/12/omml"
            xmlns="http://www.w3.org/TR/REC-html40">

            <head>
            <meta http-equiv=Content-Type content="text/html; charset=windows-1252">
            <meta name=ProgId content=Word.Document>
            <meta name=Generator content="Microsoft Word 15">
            <meta name=Originator content="Microsoft Word 15">

            <!-- Inclua as definições de estilo e fontes aqui, se necessário -->

            </head>

            <body lang=EN-US link="#0563C1" vlink="#954F72" style='tab-interval:36.0pt;word-wrap:break-word'>

            <div class=WordSection1>
                <table class=Tabelanormal border=0 cellspacing=0 cellpadding=0 width=456 style='width:342.0pt;border-collapse:collapse;mso-yfti-tbllook:1184;mso-padding-alt:0cm 0cm 0cm 0cm'>
                    <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes;height:72.45pt'>
                        <td width=134 valign=top style='width:100.8pt;padding:0cm 5.4pt 0cm 5.4pt;height:72.45pt'>
                            <p class=MsoNormal><img width=121 height=117 src="${URL.createObjectURL(logo)}" alt="Logo" v:shapes="Imagem_x0020_1"></p>
                        </td>
                        <td width=322 style='width:241.2pt;padding:0cm 5.4pt 0cm 5.4pt;height:72.45pt'>
                            <p class=MsoNormal><b><span style='font-size:9.5pt;font-family:"Open Sans",sans-serif;mso-fareast-font-family:DengXian;color:#54B948;'>${name}</span></b></p>
                            <p class=MsoNormal><b><span style='font-size:9.5pt;font-family:"Open Sans",sans-serif;mso-fareast-font-family:DengXian;color:#1B1E1F;'>${title}</span></b><span style='font-size:10.5pt;font-family:"Arial",sans-serif;mso-fareast-font-family:DengXian;color:#1B1E1F;'><br></span><span style='font-size:9.5pt;font-family:"Open Sans",sans-serif;mso-fareast-font-family:DengXian;color:#1B1E1F;'>Ramal: ${phone}<b></b></span></p>
                            <p class=MsoNormal><span style='font-size:9.5pt;font-family:"Open Sans",sans-serif;mso-fareast-font-family:DengXian;color:#54B948;'><a href="mailto:${email}"><span lang=PT-BR style='color:#54B948;mso-ansi-language:PT-BR'>${email}</span></a></span><span style='font-size:9.5pt;font-family:"Open Sans",sans-serif;mso-fareast-font-family:DengXian;color:#1B1E1F;'><o:p></o:p></span></p>
                        </td>
                    </tr>
                </table>
            </div>

            </body>

            </html>
        `;

        // Exiba a assinatura gerada no modal.
        modalContent.innerHTML = signatureHTML;
        modal.style.display = "block";
    });

    // Feche o modal quando o botão "X" for clicado
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Feche o modal quando o usuário clicar fora dele
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
