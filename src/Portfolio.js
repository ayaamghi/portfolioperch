export class Portfolio { 
    constructor(url, season, level, highestAward, teamName, teamNumber, awardPlace, region, id) { 
      this.url = url; 
      this.season = season; 
      this.level = level;
      this.awards = highestAward;
      this.teamName = teamName; 
      this.teamNumber = teamNumber; 
      this.awardPlace = awardPlace; 
      this.region = region; 
      this.id = id
    }
  
    getUrl() { 
      return this.url; 
    }
  
    getSeason() { 
      return this.season; 
    }
  
    getLevel() { 
      return this.level; 
    }
  
    getAward() { 
      return this.awards;
    }
  
    getName() { 
      return this.teamName 
    }
    getNum() { 
        return this.teamNumber;
    }
    getPlace() { 
        if(this.awardPlace != null) { 
            return this.awardPlace
        }
        else { 
            return ""; 
        }
    }
    getRegion() { 
      return this.region; 
    }

}
  