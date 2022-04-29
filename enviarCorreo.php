<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;
  require 'PHPMailer/src/Exception.php';
  require 'PHPMailer/src/PHPMailer.php';
  require 'PHPMailer/src/SMTP.php';

  $mail = new PHPMailer();
  $mail->IsSMTP();

  $mail->SMTPDebug  = 0;  
  $mail->SMTPAuth   = TRUE;
  $mail->SMTPSecure = "tls";
  $mail->Port       = 587;
  $mail->Host       = "smtp.gmail.com";
  $mail->Username   = "lurefilms1234ex@gmail.com";
  $mail->Password   = "LureFilms_12";

  $mail->IsHTML(true);
  $mail->AddAddress($email, $nombre);
  $mail->SetFrom("lurefilms1234ex@gmail.com", "Lure Films");
  $mail->Subject = "Se ha registrado exitosamente!";
  $mail->SMTPOptions = array(
    'ssl' => array(
    'verify_peer' => false,
    'verify_peer_name' => false,
    'allow_self_signed' => true
    )
    );
    $content = "<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional //EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
    <html
      xmlns='http://www.w3.org/1999/xhtml'
      xmlns:v='urn:schemas-microsoft-com:vml'
      xmlns:o='urn:schemas-microsoft-com:office:office'
    >
      <head>
        <meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='x-apple-disable-message-reformatting' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <title></title>
    
        <style type='text/css'>
          @media only screen and (min-width: 570px) {
            .u-row {
              width: 550px !important;
            }
            .u-row .u-col {
              vertical-align: top;
            }
    
            .u-row .u-col-100 {
              width: 550px !important;
            }
          }
    
          @media (max-width: 570px) {
            .u-row-container {
              max-width: 100% !important;
              padding-left: 0px !important;
              padding-right: 0px !important;
            }
            .u-row .u-col {
              min-width: 320px !important;
              max-width: 100% !important;
              display: block !important;
            }
            .u-row {
              width: calc(100% - 40px) !important;
            }
            .u-col {
              width: 100% !important;
            }
            .u-col > div {
              margin: 0 auto;
            }
          }
          body {
            margin: 0;
            padding: 0;
          }
    
          table,
          tr,
          td {
            vertical-align: top;
            border-collapse: collapse;
          }
    
          p {
            margin: 0;
          }
    
          .ie-container table,
          .mso-container table {
            table-layout: fixed;
          }
    
          * {
            line-height: inherit;
          }
    
          a[x-apple-data-detectors='true'] {
            color: inherit !important;
            text-decoration: none !important;
          }
    
          table,
          td {
            color: #000000;
          }
        </style>
    
        <!--[if !mso]><!-->
        <link
          href='https://fonts.googleapis.com/css?family=Cabin:400,700&display=swap'
          rel='stylesheet'
          type='text/css'
        />
        <!--<![endif]-->
      </head>
    
      <body
        class='clean-body u_body'
        style='
          margin: 0;
          padding: 0;
          -webkit-text-size-adjust: 100%;
          background-color: #ecf0f1;
          color: #000000;
        '
      >
        <!--[if IE]><div class='ie-container'><![endif]-->
        <!--[if mso]><div class='mso-container'><![endif]-->
        <table
          style='
            border-collapse: collapse;
            table-layout: fixed;
            border-spacing: 0;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            vertical-align: top;
            min-width: 320px;
            margin: 0 auto;
            background-color: #ecf0f1;
            width: 100%;
          '
          cellpadding='0'
          cellspacing='0'
        >
          <tbody>
            <tr style='vertical-align: top'>
              <td
                style='
                  word-break: break-word;
                  border-collapse: collapse !important;
                  vertical-align: top;
                '
              >
                <!--[if (mso)|(IE)]><table width='100%' cellpadding='0' cellspacing='0' border='0'><tr><td align='center' style='background-color: #ecf0f1;'><![endif]-->
    
                <div
                  class='u-row-container'
                  style='
                    padding: 0px;
                    background-image: url(' ');
                    background-repeat: no-repeat;
                    background-position: center top;
                    background-color: transparent;
                  '
                >
                  <div
                    class='u-row'
                    style='
                      margin: 0 auto;
                      min-width: 320px;
                      max-width: 550px;
                      overflow-wrap: break-word;
                      word-wrap: break-word;
                      word-break: break-word;
                      background-color: #fbfbfb;
                    '
                  >
                    <div
                      style='
                        border-collapse: collapse;
                        display: table;
                        width: 100%;
                        background-color: transparent;
                      '
                    >
                      <!--[if (mso)|(IE)]><table width='100%' cellpadding='0' cellspacing='0' border='0'><tr><td style='padding: 0px;background-image: url(' ');background-repeat: no-repeat;background-position: center top;background-color: transparent;' align='center'><table cellpadding='0' cellspacing='0' border='0' style='width:550px;'><tr style='background-color: #fbfbfb;'><![endif]-->
    
                      <!--[if (mso)|(IE)]><td align='center' width='550' style='width: 550px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;' valign='top'><![endif]-->
                      <div
                        class='u-col u-col-100'
                        style='
                          max-width: 320px;
                          min-width: 550px;
                          display: table-cell;
                          vertical-align: top;
                        '
                      >
                        <div style='width: 100% !important'>
                          <!--[if (!mso)&(!IE)]><!--><div
                            style='
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                            '
                          ><!--<![endif]-->
                            <table
                              style='font-family: arial, helvetica, sans-serif'
                              role='presentation'
                              cellpadding='0'
                              cellspacing='0'
                              width='100%'
                              border='0'
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style='
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 25px 40px 70px;
                                      font-family: arial, helvetica, sans-serif;
                                    '
                                    align='left'
                                  >
                                    <div
                                      style='
                                        color: #333333;
                                        line-height: 200%;
                                        text-align: left;
                                        word-wrap: break-word;
                                      '
                                    >
                                      <p style='font-size: 14px; line-height: 200%'>
                                        &nbsp;
                                      </p>
                                      <p
                                        style='
                                          font-size: 14px;
                                          line-height: 200%;
                                          text-align: center;
                                        '
                                      >
                                        &nbsp;
                                      </p>
                                      <p
                                        style='
                                          font-size: 14px;
                                          line-height: 200%;
                                          text-align: center;
                                        '
                                      >
                                        <span
                                          style='
                                            color: #000000;
                                            font-size: 24px;
                                            line-height: 48px;
                                            font-family: Cabin, sans-serif;
                                          '
                                          ><strong
                                            ><span
                                              style='
                                                line-height: 48px;
                                                font-size: 24px;
                                              '
                                              >Registro exitoso</span
                                            ></strong
                                          ></span
                                        >
                                      </p>
                                      <p style='font-size: 14px; line-height: 200%'>
                                        &nbsp;
                                      </p>
                                      <p
                                        style='
                                          font-size: 14px;
                                          line-height: 200%;
                                          text-align: justify;
                                        '
                                      >
                                        <span
                                          style='font-size: 18px; line-height: 36px'
                                          ><strong
                                            ><span
                                              style='
                                                font-family: Cabin, sans-serif;
                                                line-height: 36px;
                                                font-size: 18px;
                                              '
                                              >Señor ".$nombre."</span
                                            ></strong
                                          ></span
                                        >
                                      </p>
                                      <p
                                        style='
                                          font-size: 14px;
                                          line-height: 200%;
                                          text-align: justify;
                                        '
                                      >
                                        <span
                                          style='
                                            font-family: Cabin, sans-serif;
                                            font-size: 16px;
                                            line-height: 32px;
                                          '
                                          >Nos complace que se registre en nuestro
                                          sitio web</span
                                        >
                                      </p>
                                      <p
                                        style='
                                          font-size: 14px;
                                          line-height: 200%;
                                          text-align: justify;
                                        '
                                      >Se ha registrado con el correo: ".$email."
                                        &nbsp;
                                      </p>
                                      <p
                                        style='
                                          font-size: 14px;
                                          line-height: 200%;
                                          text-align: justify;
                                        '
                                      >
                                        <span
                                          style='
                                            font-family: Cabin, sans-serif;
                                            font-size: 16px;
                                            line-height: 32px;
                                          '
                                          >Esperamos que disfrute de la cartelera de películas y nos recomiende</span
                                        >
                                      </p>
                                      <p style='font-size: 14px; line-height: 200%'>
                                        &nbsp;
                                      </p>
                                      <p style='line-height: 200%; font-size: 14px'>
                                        <span
                                          style='
                                            font-family: Cabin, sans-serif;
                                            font-size: 14px;
                                            line-height: 28px;
                                          '
                                          ><span
                                            style='
                                              font-size: 18px;
                                              line-height: 36px;
                                            '
                                            ><strong
                                              >Lure Films, Inc.</strong
                                            ></span
                                          ></span
                                        >
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
    
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        <!--[if mso]></div><![endif]-->
        <!--[if IE]></div><![endif]-->
      </body>
    </html>
    ";

  $mail->MsgHTML($content); 
  if(!$mail->Send()) {
    echo "Error while sending Email.";
    var_dump($mail);
  } else {
    echo "Email sent successfully";
  }
?>