
var html = '<div class="container-fluid calculator">'+
'		<div class="row">'+
''+
'			<div class="col-md-3 col-sm-12 col-xs-12  top-pad-zero">'+
'				<table width="100%">'+
'					<tr>'+
'						<td width="40%"><div class="well-logo border-radius-left"></div></td>'+
'						<td>				<img src="assets/img/logo.png" />'+
'						</td>'+
'						<td width="40%"><div class="well-logo border-radius-right"></div></td>'+
'						'+
'					</tr>'+
'				</table>'+
'				'+
'			</div>'+
'			<div class=" col-md-6 col-sm-8 col-xs-8 padding-5 pading-left-15  total-finance-charge">'+
'				<div class="well well-sm bold amount-title">TOTAL FINANCE CHARGE:'+
'				</div>'+
'			</div>'+
'			<div class="col-md-3  col-sm-4 col-xs-4 padding-5">'+
'				<div id="smsi_total_finance_charge" class="well well-sm bold amount">$0.00</div>'+
'			</div>'+
'		</div>'+
''+
'		<div class="row">'+
'			<div class="col-md-12 padding-5">'+
'				<div class="well well-sm well-title grey-bg sm-screen">'+
'						<div class="robo-heading">How much do you need?</div>'+
'						'+
'				</div>'+
'				<div class="well well-body">'+
'					'+
'					<div class="robo-heading max-screen">How much do you need?</div>'+
'					<div class="row margin-top-10 sm-scr-margin-top-0">'+
'						<div class="col-md-12 col-sm-12 col-xs-12 price padding-top-5">'+
'							<div class="row sm-screen sm-scr-bottom-margin-10">'+
'										<div class="col-md-6 col-sm-6 col-xs-6">$0.00</div>'+
'										<div class="col-md-6 col-sm-6 col-xs-6 text-right">$4,000</div>'+
'							</div>'+
'								'+
'								<table width="100%">'+
'										<tr>'+
'									<td width="9%" class="max-screen">$0.00</td>'+
'									<td width="80%" >'+
''+
'										<div class="range-container ui-slider-track ui-shadow-inset ui-bar-inherit ui-corner-all" id="smsi_loan_amount_container">'+
'											<input type="range" class="hide" popup-prefix="$" id="smsi_loan_amount" data-highlight="true" name="slider-1" min="0" max="4000"'+
'											 value="0" step="100" data-popup-enabled="true">'+
''+
'										</div>'+
'									</td>'+
'									<td  class="max-screen" align="right">$4,000</td>'+
'								</tr>'+
'							</table>'+
'						</div>'+
'					</div>'+
'				</div>'+
'			</div>'+
'		</div>'+
'		<div class="row">'+
'			<div class="col-md-12 padding-5">'+
'					<div class="well well-sm well-title grey-bg sm-screen">'+
'							<div class="robo-heading">How long do you need it?</div>'+
'							'+
'					</div>'+
'				<div class="well well-body bottom-border-zero">'+
''+
''+
'					<div class="robo-heading max-screen">How long do you need it?</div>'+
'					<div class="row margin-top-10" id="smsi_day_slide_container">'+
''+
'						<div class="col-md-12 col-sm-12 col-xs-12 price padding-top-5">'+
'							<div class="row sm-screen sm-scr-bottom-margin-10">'+
'										<div class="col-md-6 col-sm-6 col-xs-6">1 DAY</div>'+
'										<div class="col-md-6 col-sm-6 col-xs-6 text-right">30 DAYS</div>'+
'							</div>'+
'							<table width="100%" >'+
'								<tr>'+
'									<td class="max-screen table-cell" width="10%">1 DAY</td>'+
'									<td width="78%" id="range_slider_td">'+
''+
'										<div class="range-container ui-slider-track ui-shadow-inset ui-bar-inherit ui-corner-all" id="smsi_day_slide_container_div">'+
'											<input type="range" class="hide" id="smsi_day_slide" data-highlight="true" name="slider-1" min="1" popup-postfix=" Days"'+
'											 max="30" value="1" step="1" data-popup-enabled="true">'+
''+
'										</div>'+
'									</td>'+
'									<td class="max-screen table-cell" align="right">30 DAYS</td>'+
'								</tr>'+
''+
'							</table>'+
'							</div></div>'+
'							<div class="row margin-top-10 hide" id="smsi_month_slide_container">'+
'									'+
'								<div class="col-md-12 col-sm-12 col-xs-12 price padding-top-5">'+
'										<div class="row sm-screen sm-scr-bottom-margin-10">'+
'												<div class="col-md-6 col-sm-6 col-xs-6">1 MONTH</div>'+
'												<div class="col-md-6 col-sm-6 col-xs-6 text-right">12 MONTHS</div>'+
'									</div>'+
'																'+
'							<table  width="100%">'+
'								<tr>'+
'									<td width="12%" class="max-screen table-cell">1 Month</td>'+
'									<td width="72%" id="range_slider_td">'+
'										<div class="range-container ui-slider-track ui-shadow-inset ui-bar-inherit ui-corner-all" id="smsi_month_slide_container_div">'+
''+
'											<input type="range" class="hide" id="smsi_month_slide" data-highlight="true" name="slider-1" min="1" max="12" popup-postfix=" Months"'+
'											 value="1" step="1" data-popup-enabled="true">'+
'										</div>'+
''+
'									</td>'+
'									<td align="right" class="max-screen table-cell">12 Months</td>'+
'								</tr>'+
''+
'							</table>'+
''+
''+
''+
''+
'						</div>'+
'					</div>'+
''+
''+
''+
'				</div>'+
''+
'				<div class="well top-border-zero grey-bg option-label">'+
'					<div class="row ">'+
'						<div class="col-md-6 col-sm-12 col-xs-12 ">'+
'							<i>Need it longer? Select months.</i>'+
'						</div>'+
'						<div class="col-md-6 col-sm-12 col-xs-12 sm-scr-margin-top-10">'+
'							<div class="row">'+
'								<div class="col-md-4 col-sm-4 col-xs-4 padding-5 text-right">'+
'									<span class="days text-orange" id="smsi_dayswitch">Days </span>'+
'								</div>'+
'								<div class="col-md-4 col-sm-4 col-xs-4 text-center padding-left-right-zero">'+
'									<label class="switch">'+
'										<input onclick="smsi_switchDayMonth()" type="checkbox" id="smsi_day_month_switch">'+
'										<span class="sw-slider round"></span>'+
'									</label>'+
'								</div>'+
'								<div class="col-md-4 col-sm-4 col-xs-4 padding-5 text-left">'+
'									<span class="days" id="smsi_monthswitch">Months</span>'+
'								</div>'+
'							</div>'+
''+
''+
''+
''+
'						</div>'+
'					</div>'+
''+
''+
'					<div class="row ">'+
'						<div class="col-md-6 col-sm-12 col-xs-12">'+
'							<i>Select a pay cycle.</i>'+
'						</div>'+
'						<div class="col-md-6 col-sm-12 col-xs-12 sm-scr-margin-top-10">'+
'							<div class="row">'+
'								<div class="col-md-4 col-sm-4 col-xs-4 padding-6 text-right">'+
'									<span class="days text-orange" id="smsi_paycyle_14">14 Days </span>'+
'								</div>'+
'								<div class="col-md-4 col-sm-4 col-xs-4 text-center padding-left-right-zero">'+
'									<label class="switch">'+
'										<input onclick="smsiSwitch(\'smsi_pay_cycle\',\'smsi_paycyle_14\',\'smsi_paycyle_30\')" type="checkbox" id="smsi_pay_cycle">'+
'										<span class="sw-slider round"></span>'+
'									</label>'+
'								</div>'+
'								<div class="col-md-4 col-sm-4 col-xs-4 padding-6 text-left">'+
'									<span class="days" id="smsi_paycyle_30">30 Days</span>'+
'								</div>'+
'							</div>'+
''+
''+
''+
''+
'						</div>'+
'					</div>'+
''+
''+
'				</div>'+
'			</div>'+
'		</div>'+
''+
'		<div class="row">'+
'			<div class="col-md-9 col-sm-8 col-xs-8 padding-5">'+
'				<div class="well well-sm text-right normal amount-title pad-right-10">TOTAL REPAYMENT:</div>'+
''+
'			</div>'+
'			<div class="col-md-3 col-sm-4 col-xs-4 padding-5">'+
'				<div class="well well-sm text-center normal amount" id="smsi_total_repayment">$0.00</div>'+
'			</div>'+
'		</div>'+
''+
'		<div class="row hide">'+
'			<div class="col-md-12 padding-5">'+
'				<div class="robo-regular">'+
'					<span class="robo-bold">CALCULATOR ASSUMES 279% APR.</span> THE FLEX LOAN IS AFFORDABLE AS A SHORT-TERM SOLUTION.'+
'				</div>'+
'			</div>'+
'		</div>'+
''+
'	</div>';


var smsiHead = '<link rel="stylesheet" href="assets/jquery-mobile/jquery.mobile-1.4.5.min.css">'+
	'<script src="assets/jquery-mobile/jquery.mobile-1.4.5.js"></script>'+
	'<link rel="stylesheet" href="assets/css/switch.css" />'+
	'<link rel="stylesheet" href="assets/css/custom.css" />';




function smsiCalculatorInit(id) {
	$('head').append(smsiHead);
	$("#"+id).html(html);
//	smsiEventChange();
}

var tooltipInit = false;

function smsi_switchDayMonth() {



	
	if ($("#smsi_day_month_switch").is(":checked")) {
		$("#smsi_day_slide_container").addClass('hide');
		$("#smsi_month_slide_container").removeClass('hide');
	$("#smsi_dayswitch").removeClass('text-orange');
	$("#smsi_monthswitch").addClass('text-orange');
	
	} else {
		$("#smsi_month_slide_container").addClass('hide');
		$("#smsi_day_slide_container").removeClass('hide');
		$("#smsi_monthswitch").removeClass('text-orange');
		$("#smsi_dayswitch").addClass('text-orange');
		
	}
	smsiCalculateAmount();
	
	tooltipInit= false;
	smsiEventChange();
	
}

function smsiSwitch(id,left,right) {
	if ($("#"+id).is(":checked")) {
		$("#"+left).removeClass('text-orange');
		$("#"+right).addClass('text-orange');
	} else {
		$("#"+right).removeClass('text-orange');
		$("#"+left).addClass('text-orange');
	}
	smsiCalculateAmount();
}

function smsiCalculateInterest(loan_amount,numofday,month) {
	
	var interest =279.50; 
	var paydown = 10;
	var biweeklyPayCycle = true;
	if ($("#smsi_pay_cycle").is(":checked")) {
		biweeklyPayCycle = false;
	}
	var amount = 0;
	if(biweeklyPayCycle) {
		
		if($("#smsi_day_month_switch").is(":checked")) {
		
			var onepaydown = 1-((paydown/2)/100);
			var loaninterest = loan_amount*(interest/100)*(14/365);
			if(month==1) {
				amount = (loaninterest)+ (loaninterest*onepaydown);
			}else if(month==2) {
				amount = (loaninterest)+ (loaninterest*onepaydown) + (loaninterest*onepaydown*onepaydown) +(loaninterest*onepaydown*onepaydown*onepaydown);
			}else if(month==3) {
				amount = (loaninterest)+ (loaninterest*onepaydown) + (loaninterest*onepaydown*onepaydown) +(loaninterest*onepaydown*onepaydown*onepaydown)+
				(loaninterest*onepaydown*onepaydown*onepaydown*onepaydown)+(loaninterest*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown);
			}else if(month==4) {
				amount = (loaninterest)+ (loaninterest*onepaydown) + (loaninterest*onepaydown*onepaydown) +(loaninterest*onepaydown*onepaydown*onepaydown)+
				(loaninterest*onepaydown*onepaydown*onepaydown*onepaydown)+(loaninterest*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown)+
				(loaninterest*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown)+(loaninterest*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown);
			}else if(month==5) {
				amount = (loaninterest)+ (loaninterest*onepaydown) + (loaninterest*onepaydown*onepaydown) +(loaninterest*onepaydown*onepaydown*onepaydown)+
				(loaninterest*onepaydown*onepaydown*onepaydown*onepaydown)+(loaninterest*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown)+
				(loaninterest*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown)+(loaninterest*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown)+
				(loaninterest*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown)+
				(loaninterest*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown);
				
			}else if(month==6) {
				amount = (loaninterest)+ (loaninterest*onepaydown) + (loaninterest*onepaydown*onepaydown) +(loaninterest*onepaydown*onepaydown*onepaydown)+
				(loaninterest*onepaydown*onepaydown*onepaydown*onepaydown)+(loaninterest*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown)+
				(loaninterest*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown)+(loaninterest*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown)+
				(loaninterest*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown)+
				(loaninterest*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown)+
				(loaninterest*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown)+
				(loaninterest*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown);
			
			}else if(month==7) {
				amount = loaninterest + (loaninterest*onepaydown) + (loaninterest*(Math.pow(onepaydown, 2)))+ (loaninterest*(Math.pow(onepaydown, 3)))+ (loaninterest*(Math.pow(onepaydown, 4)))+ (loaninterest*(Math.pow(onepaydown, 5)))+ (loaninterest*(Math.pow(onepaydown, 6)))+ (loaninterest*(Math.pow(onepaydown, 7)))+ (loaninterest*(Math.pow(onepaydown, 8)))+ (loaninterest*(Math.pow(onepaydown, 9)))+ (loaninterest*(Math.pow(onepaydown, 10)))+ (loaninterest*(Math.pow(onepaydown, 11)))+ (loaninterest*(Math.pow(onepaydown, 12)))+ (loaninterest*(Math.pow(onepaydown, 13)))+ (loaninterest*(Math.pow(onepaydown, 14)));
					
			}else if(month==8) {
				amount = loaninterest + (loaninterest*onepaydown) + (loaninterest*(Math.pow(onepaydown, 2)))+ (loaninterest*(Math.pow(onepaydown, 3)))+ (loaninterest*(Math.pow(onepaydown, 4)))+ (loaninterest*(Math.pow(onepaydown, 5)))+ (loaninterest*(Math.pow(onepaydown, 6)))+ (loaninterest*(Math.pow(onepaydown, 7)))+ (loaninterest*(Math.pow(onepaydown, 8)))+ (loaninterest*(Math.pow(onepaydown, 9)))+ (loaninterest*(Math.pow(onepaydown, 10)))+ (loaninterest*(Math.pow(onepaydown, 11)))+ (loaninterest*(Math.pow(onepaydown, 12)))+ (loaninterest*(Math.pow(onepaydown, 13)))+ (loaninterest*(Math.pow(onepaydown, 14)))+ (loaninterest*(Math.pow(onepaydown, 15)))+ (loaninterest*(Math.pow(onepaydown, 16)));
					
			
			}else if(month==9) {
				amount = loaninterest + (loaninterest*onepaydown) + (loaninterest*(Math.pow(onepaydown, 2)))+ (loaninterest*(Math.pow(onepaydown, 3)))+ (loaninterest*(Math.pow(onepaydown, 4)))+ (loaninterest*(Math.pow(onepaydown, 5)))+ (loaninterest*(Math.pow(onepaydown, 6)))+ (loaninterest*(Math.pow(onepaydown, 7)))+ (loaninterest*(Math.pow(onepaydown, 8)))+ (loaninterest*(Math.pow(onepaydown, 9)))+ (loaninterest*(Math.pow(onepaydown, 10)))+ (loaninterest*(Math.pow(onepaydown, 11)))+ (loaninterest*(Math.pow(onepaydown, 12)))+ (loaninterest*(Math.pow(onepaydown, 13)))+ (loaninterest*(Math.pow(onepaydown, 14)))+ (loaninterest*(Math.pow(onepaydown, 15)))+ (loaninterest*(Math.pow(onepaydown, 16)))+ (loaninterest*(Math.pow(onepaydown, 17)))+ (loaninterest*(Math.pow(onepaydown, 18)));
				
				
			}else if(month==10) {
				
				amount = loaninterest + (loaninterest*onepaydown) + (loaninterest*(Math.pow(onepaydown, 2)))+ (loaninterest*(Math.pow(onepaydown, 3)))+ (loaninterest*(Math.pow(onepaydown, 4)))+ (loaninterest*(Math.pow(onepaydown, 5)))+ (loaninterest*(Math.pow(onepaydown, 6)))+ (loaninterest*(Math.pow(onepaydown, 7)))+ (loaninterest*(Math.pow(onepaydown, 8)))+ (loaninterest*(Math.pow(onepaydown, 9)))+ (loaninterest*(Math.pow(onepaydown, 10)))+ (loaninterest*(Math.pow(onepaydown, 11)))+ (loaninterest*(Math.pow(onepaydown, 12)))+ (loaninterest*(Math.pow(onepaydown, 13)))+ (loaninterest*(Math.pow(onepaydown, 14)))+ (loaninterest*(Math.pow(onepaydown, 15)))+ (loaninterest*(Math.pow(onepaydown, 16)))+ (loaninterest*(Math.pow(onepaydown, 17)))+ (loaninterest*(Math.pow(onepaydown, 18)))+ (loaninterest*(Math.pow(onepaydown, 19)))+ (loaninterest*(Math.pow(onepaydown, 20)));
			}else if(month==11) {
				amount = loaninterest + (loaninterest*onepaydown) + (loaninterest*(Math.pow(onepaydown, 2)))+ (loaninterest*(Math.pow(onepaydown, 3)))+ (loaninterest*(Math.pow(onepaydown, 4)))+ (loaninterest*(Math.pow(onepaydown, 5)))+ (loaninterest*(Math.pow(onepaydown, 6)))+ (loaninterest*(Math.pow(onepaydown, 7)))+ (loaninterest*(Math.pow(onepaydown, 8)))+ (loaninterest*(Math.pow(onepaydown, 9)))+ (loaninterest*(Math.pow(onepaydown, 10)))+ (loaninterest*(Math.pow(onepaydown, 11)))+ (loaninterest*(Math.pow(onepaydown, 12)))+ (loaninterest*(Math.pow(onepaydown, 13)))+ (loaninterest*(Math.pow(onepaydown, 14)))+ (loaninterest*(Math.pow(onepaydown, 15)))+ (loaninterest*(Math.pow(onepaydown, 16)))+ (loaninterest*(Math.pow(onepaydown, 17)))+ (loaninterest*(Math.pow(onepaydown, 18)))+ (loaninterest*(Math.pow(onepaydown, 19)))+ (loaninterest*(Math.pow(onepaydown, 20)))+ (loaninterest*(Math.pow(onepaydown, 21)))+ (loaninterest*(Math.pow(onepaydown, 22)));
			}else if(month==12) {
				amount = loaninterest + (loaninterest*onepaydown) + (loaninterest*(Math.pow(onepaydown, 2)))+ (loaninterest*(Math.pow(onepaydown, 3)))+ (loaninterest*(Math.pow(onepaydown, 4)))+ (loaninterest*(Math.pow(onepaydown, 5)))+ (loaninterest*(Math.pow(onepaydown, 6)))+ (loaninterest*(Math.pow(onepaydown, 7)))+ (loaninterest*(Math.pow(onepaydown, 8)))+ (loaninterest*(Math.pow(onepaydown, 9)))+ (loaninterest*(Math.pow(onepaydown, 10)))+ (loaninterest*(Math.pow(onepaydown, 11)))+ (loaninterest*(Math.pow(onepaydown, 12)))+ (loaninterest*(Math.pow(onepaydown, 13)))+ (loaninterest*(Math.pow(onepaydown, 14)))+ (loaninterest*(Math.pow(onepaydown, 15)))+ (loaninterest*(Math.pow(onepaydown, 16)))+ (loaninterest*(Math.pow(onepaydown, 17)))+ (loaninterest*(Math.pow(onepaydown, 18)))+ (loaninterest*(Math.pow(onepaydown, 19)))+ (loaninterest*(Math.pow(onepaydown, 20)))+ (loaninterest*(Math.pow(onepaydown, 21)))+ (loaninterest*(Math.pow(onepaydown, 22)))+ (loaninterest*(Math.pow(onepaydown, 23)))+ (loaninterest*(Math.pow(onepaydown, 24)));
			}
			
		} else {
			if(numofday <=14) {
				amount = loan_amount*(interest/100)*(numofday/365);
			} else if(numofday <=28) {
				amount = (loan_amount*(interest/100)*(14/365))+(loan_amount*(1-((paydown/2)/100))*(interest/100)*(numofday-14)/365);
			} else if(numofday <= 30) {
				amount = (loan_amount*(interest/100)*(14/365))+(loan_amount*(1-((paydown/2)/100))*(interest/100)*(14)/365)+((loan_amount*(1-((paydown/2)/100)))*(1-((paydown/2)/100))*(interest/100)*(numofday-28)/365);
			}
		
		}
		
		
	} else {

		if($("#smsi_day_month_switch").is(":checked")) {
			var onepaydown = 1-((paydown)/100);
			var loaninterest = loan_amount*(interest/100)*(30/365);
			if(month==1) {
				amount = loaninterest;
			
			}else if(month==2) {
				amount = (loaninterest)+ (loaninterest*onepaydown);
			}else if(month==3) {
				amount = (loaninterest)+ (loaninterest*onepaydown) + (loaninterest*onepaydown*onepaydown);
			}
			else if(month==4) {
				amount = (loaninterest)+ (loaninterest*onepaydown) + (loaninterest*onepaydown*onepaydown) +(loaninterest*onepaydown*onepaydown*onepaydown);
			}else if(month==5) {
				amount = (loaninterest)+ (loaninterest*onepaydown) + (loaninterest*onepaydown*onepaydown) +(loaninterest*onepaydown*onepaydown*onepaydown)+
				(loaninterest*onepaydown*onepaydown*onepaydown*onepaydown);
			}else if(month==6) {
				amount = (loaninterest)+ (loaninterest*onepaydown) + (loaninterest*onepaydown*onepaydown) +(loaninterest*onepaydown*onepaydown*onepaydown)+
				(loaninterest*onepaydown*onepaydown*onepaydown*onepaydown)+(loaninterest*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown);
			}else if(month==7) {
				amount = (loaninterest)+ (loaninterest*onepaydown) + (loaninterest*onepaydown*onepaydown) +(loaninterest*onepaydown*onepaydown*onepaydown)+
				(loaninterest*onepaydown*onepaydown*onepaydown*onepaydown)+(loaninterest*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown)+
				(loaninterest*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown);
				
			}else if(month==8) {
				amount = (loaninterest)+ (loaninterest*onepaydown) + (loaninterest*onepaydown*onepaydown) +(loaninterest*onepaydown*onepaydown*onepaydown)+
				(loaninterest*onepaydown*onepaydown*onepaydown*onepaydown)+(loaninterest*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown)+
				(loaninterest*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown)+(loaninterest*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown*onepaydown);
				
			}else if(month==9) {
				amount = loaninterest + (loaninterest*onepaydown) + (loaninterest*(Math.pow(onepaydown, 2)))+ (loaninterest*(Math.pow(onepaydown, 3)))+ (loaninterest*(Math.pow(onepaydown, 4)))+ (loaninterest*(Math.pow(onepaydown, 5)))+ (loaninterest*(Math.pow(onepaydown, 6)))+ (loaninterest*(Math.pow(onepaydown, 7)))+ (loaninterest*(Math.pow(onepaydown, 8)));
					
			}else if(month==10) {
				amount = loaninterest + (loaninterest*onepaydown) + (loaninterest*(Math.pow(onepaydown, 2)))+ (loaninterest*(Math.pow(onepaydown, 3)))+ (loaninterest*(Math.pow(onepaydown, 4)))+ (loaninterest*(Math.pow(onepaydown, 5)))+ (loaninterest*(Math.pow(onepaydown, 6)))+ (loaninterest*(Math.pow(onepaydown, 7)))+ (loaninterest*(Math.pow(onepaydown, 8)))+ (loaninterest*(Math.pow(onepaydown, 9)));
					
			
			}else if(month==11) {
				amount = loaninterest + (loaninterest*onepaydown) + (loaninterest*(Math.pow(onepaydown, 2)))+ (loaninterest*(Math.pow(onepaydown, 3)))+ (loaninterest*(Math.pow(onepaydown, 4)))+ (loaninterest*(Math.pow(onepaydown, 5)))+ (loaninterest*(Math.pow(onepaydown, 6)))+ (loaninterest*(Math.pow(onepaydown, 7)))+ (loaninterest*(Math.pow(onepaydown, 8)))+ (loaninterest*(Math.pow(onepaydown, 9)))+ (loaninterest*(Math.pow(onepaydown, 10)));
				
				
			}else if(month==12) {
				
				amount = loaninterest + (loaninterest*onepaydown) + (loaninterest*(Math.pow(onepaydown, 2)))+ (loaninterest*(Math.pow(onepaydown, 3)))+ (loaninterest*(Math.pow(onepaydown, 4)))+ (loaninterest*(Math.pow(onepaydown, 5)))+ (loaninterest*(Math.pow(onepaydown, 6)))+ (loaninterest*(Math.pow(onepaydown, 7)))+ (loaninterest*(Math.pow(onepaydown, 8)))+ (loaninterest*(Math.pow(onepaydown, 9)))+ (loaninterest*(Math.pow(onepaydown, 10)))+ (loaninterest*(Math.pow(onepaydown, 11)));
			
			
			}
			

		} else {
		  amount = loan_amount*(interest/100)*(numofday/365); 
		}
	}
	return amount;
}

function smsiCalculateAmount() {
	var month=0;
	var numofday = $("#smsi_day_slide").val();
	if ($("#smsi_day_month_switch").is(":checked")) {
		month = $("#smsi_month_slide").val()
		numofday = month * 30;
		
	}
	var loan_amount = $("#smsi_loan_amount").val();
	var smsi_total_finance_charge = smsiCalculateInterest(loan_amount,numofday,month);
	//var smsi_total_finance_charge = (loan_amount / 100) * 0.77 * numofday;
	$("#smsi_total_finance_charge").html(
			'$' + smsi_total_finance_charge.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
	var smsi_total_repayment = smsi_total_finance_charge
			+ parseFloat(loan_amount);
	$("#smsi_total_repayment").html('$' + smsi_total_repayment.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

}




function smsiPositionPopup(isToolTip) {
	if(isToolTip) {
		return;
	}
	
	var handles = $(".ui-slider-handle");
	var popups = $(".ui-slider-popup");
	var counter =0;
	handles.each(function(){
		var popup = popups[counter];
		var dstOffset = $(this).offset();
		$(popup).offset( {
			left: dstOffset.left + ( $(this).width() - $(popup).width() ) / 2,
			top: dstOffset.top - $(popup).outerHeight() - 10
		});	
		counter++;
	});
	
	$('.ui-slider-popup').css("display","block");
}


function smsiEventChange() {
	$('.ui-slider-popup').css("display","block");
	smsiPositionPopup(tooltipInit);
	smsiCalculateAmount();
	tooltipInit = true;
}
$(document.body).on('change', '.range-container' ,function(){
	smsiEventChange();
});

