package com.davidlekei.lolmatchtrackerapi.data.game;

import com.davidlekei.lolmatchtrackerapi.data.DataObject;
import com.davidlekei.lolmatchtrackerapi.data.game.champions.Champion;
import com.davidlekei.lolmatchtrackerapi.data.game.items.GameItem;
import com.davidlekei.lolmatchtrackerapi.data.game.items.Item;
import com.davidlekei.lolmatchtrackerapi.data.game.items.Trinket;
import com.davidlekei.lolmatchtrackerapi.data.game.runes.RunePage;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

//TODO: Make custom DateTime class
import java.sql.Timestamp;

public class Match implements DataObject
{
    //TODO: These should be changed from int's to their respective Data classes
    private int id;
    private String datePlayed;
    private String duration;
    private String riot_id;
    private Champion championPlayed;
    private Champion championAgainst;
    private Item[] items;
    private Trinket trinket;
    private RunePage runePage;
    private int matchNotes;
    private int user;
    private String kda;
    private String outcome;
    private String summonerSpell1;
    private String summonerSpell2;

    public Match() { }

    public int getId() {
        return id;
    }

    public String getDatePlayed() {
        return datePlayed;
    }

    public String getDuration() { return duration; }

    public String getRiot_id() {
        return riot_id;
    }

    public Champion getChampionPlayed() {
        return championPlayed;
    }

    public Champion getChampionAgainst() {
        return championAgainst;
    }

    public Item[] getItems() {
        return items;
    }

    public Trinket getTrinket() {return trinket;}

    public RunePage getRunePage() {
        return runePage;
    }

    public int getMatchNotes() {
        return matchNotes;
    }

    public int getUser() {
        return user;
    }

    public void setId(int id) { this.id = id; }

    public void setDatePlayed(String datePlayed) { this.datePlayed = datePlayed; }

    public void setDuration(String duration) { this.duration = duration; }

    public void setRiotId(String riotId){ this.riot_id = riotId; }

    public void setChampionPlayed(Champion championPlayed) { this.championPlayed = championPlayed; }

    public void setChampionAgainst(Champion championAgainst) { this.championAgainst = championAgainst; }

    public void setItems(Item[] items) { this.items = items; }

    public void setTrinket(Trinket trinket) {this.trinket = trinket;}

    public void setRunePage(RunePage runePage) { this.runePage = runePage; }

    public void setMatchNotes(int matchNotes) { this.matchNotes = matchNotes; }

    public void setUser(int user) { this.user = user; }

    public void setRiot_id(String riot_id) {
        this.riot_id = riot_id;
    }

    public String getKda() {
        return kda;
    }

    public void setKda(String kda) {
        this.kda = kda;
    }

    public String getOutcome() {
        return outcome;
    }

    public void setOutcome(String outcome) {
        this.outcome = outcome;
    }

    public String toString()
    {
        return "[Match] - ID: " + id;
    }

    public String getSummonerSpell1(){return summonerSpell1;}

    public void setSummonerSpell1(String name) {summonerSpell1 = name;}

    public String getSummonerSpell2() {return summonerSpell2;}

    public void setSummonerSpell2(String name) {summonerSpell2 = name;}
}