import { Actor, Cast, TakeNotes } from '@serenity-js/core';
import { BrowseTheWeb } from '@serenity-js/webdriverio';

export class Actors implements Cast {
    [x: string]: any;
    prepare(actor: Actor): Actor {
        return actor.whoCan(
            TakeNotes.usingAnEmptyNotepad(),
            BrowseTheWeb.using(browser),
        );
    }
}
