package com.davidlekei.LolMatchTracker;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Starting App..." );

        LolMatchTracker lolmt = LolMatchTracker.get();
        lolmt.run();
    }
}
