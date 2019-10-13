/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      if ((knowsProgramming = true) && (focus=='family')) {
        return 200;
      } else if ((knowsProgramming == true) && (focus=='friends')){
        return 80;
      } else if ((knowsProgramming == true) && (focus=='normal_life')) {
        return 40;
      } else if ((knowsProgramming == true) && (focus=='profession')){
        return 27;
      } else if ((knowsProgramming == true) && (focus=='carrier')){
        return 20;
      } else if ((knowsProgramming == true) && (focus=='top_peformance')){
        return 14;
      } else {
        return 44;
      };
      let weeks = getTimeForEducation('family', true, Config);
  console.log(weeks);

    } 