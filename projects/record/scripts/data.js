function ClimateChange(year, carbonDioxide, globalTemp, iceSheets, seaLevel) {
	this.year = year;
	this.carbonDioxide = carbonDioxide;
	this.globalTemp = globalTemp;
	this.iceSheets = iceSheets;
	this.seaLevel = seaLevel;
}

const Y2017 = new ClimateChange(2017, 406.17, 0.95, -1915.45, 43.8);
const Y2016 = new ClimateChange(2016, 402.56, 0.89, -1594.66, 44.75);
const Y2015 = new ClimateChange(2015, 399.98, 0.83, -1421.03, 35.01);
const Y2014 = new ClimateChange(2014, 397.85, 0.77, -1215.15, 28.43);
const Y2013 = new ClimateChange(2013, 395.55, 0.71, -941.42, 29.66);
const Y2012 = new ClimateChange(2012, 393.12, 0.67, -1026.55, 20.34);
const Y2011 = new ClimateChange(2011, 391.33, 0.63, -841.22, 11.57);
const Y2010 = new ClimateChange(2010, 388.71, 0.62, -676.08, 15.56);
const Y2009 = new ClimateChange(2009, 386.94, 0.62, -709.52, 10.12);
const Y2008 = new ClimateChange(2008, 385.52, 0.62, -449.31, 5.78);
const Y2007 = new ClimateChange(2007, 382.89, 0.61, -310.88, 5.72);
const Y2006 = new ClimateChange(2006, 381.38, 0.61, -316.99, 4.37);
const Y2005 = new ClimateChange(2005, 378.46, 0.61, -213.58, 1.23);
const Y2004 = new ClimateChange(2004, 377, 0.6, -243, -0.82);

function createObjects() {
	var allObjects = [Y2004, Y2005, Y2006, Y2007, Y2008, Y2009, Y2010, Y2011, Y2012, Y2013, Y2013, Y2015, Y2016, Y2017];
	var halfObjects = [Y2005, Y2007, Y2009, Y2011, Y2013, Y2015, Y2017];
	return halfObjects;
}