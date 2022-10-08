ce_importbtn_button = document.createElement('button');
ce_importbtn_button.id = "ce_btn_importcsv";
ce_importbtn_button.classList.add("mat-focus-indicator", "mat-raised-button", "mat-button-base", "mat-accent");

ce_importbtn_span_text = document.createElement('span');
ce_importbtn_span_text.innerHTML = "CSV Import";

ce_importbtn_div_ripple = document.createElement('div');


ce_importbtn_div_overlay = document.createElement('div');


ce_importbtn_button.appendChild(ce_importbtn_span_text);
ce_importbtn_button.appendChild(ce_importbtn_div_ripple);
ce_importbtn_button.appendChild(ce_importbtn_div_overlay);

ce_buttondiv = document.querySelector("body > boat-root > boat-app-layout > boat-main-nav > mat-sidenav-container > mat-sidenav-content > div > boat-taetigkeit-list > base-list-wrapper > div > div > div > div");
ce_buttondiv.appendChild(ce_importbtn_button);