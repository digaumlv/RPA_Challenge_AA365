a = Teste();

function Teste(){
	i=0;
	do{
		if(document.getElementsByTagName('label')[i].innerText.trim() == 'First Name'){
			document.getElementsByTagName('input')[i].value = '#FirstName#';
			break;
		}
			i++;
	}while(i<document.getElementsByTagName('label').length);

	i=0;
		
	do{
		if(document.getElementsByTagName('label')[i].innerText.trim() == 'Last Name'){
			document.getElementsByTagName('input')[i].value = '#LastName#';
			break;
		}
		i++;
	}while(i<document.getElementsByTagName('label').length);

	i=0;
		
	do{
		if(document.getElementsByTagName('label')[i].innerText.trim() == 'Email'){
			document.getElementsByTagName('input')[i].value = '#Email#' ;
			break;
		}
		i++;
	}while(i<document.getElementsByTagName('label').length);

	i=0;
		
	do{
		if(document.getElementsByTagName('label')[i].innerText.trim() == 'Phone Number'){
			document.getElementsByTagName('input')[i].value = '#PhoneNumber#';
			break;
		}
		i++;
	}while(i<document.getElementsByTagName('label').length);

	i=0;
	do{
		if(document.getElementsByTagName('label')[i].innerText.trim() == 'Company Name'){
			document.getElementsByTagName('input')[i].value = '#CompanyName#' ;
			break;
		}
		i++;
	}while(i<document.getElementsByTagName('label').length);

	i=0;
		
	do{
		if(document.getElementsByTagName('label')[i].innerText.trim() == 'Address'){
			document.getElementsByTagName('input')[i].value = '#Address#' ;
			break;
		}
		i++;
	}while(i<document.getElementsByTagName('label').length);
		
	i=0;
		
	do{
		if(document.getElementsByTagName('label')[i].innerText.trim() == 'Role in Company'){
			document.getElementsByTagName('input')[i].value = '#RoleInCompany#' ;
			break;
		}
		i++;
	}while(i<document.getElementsByTagName('label').length);

	document.querySelector('body > app-root > div.body.row1.scroll-y > app-rpa1 > div > div.inputFields.col.s6.m6.l6 > form > input').click();
}