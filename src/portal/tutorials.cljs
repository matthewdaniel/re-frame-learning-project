(ns portal.tutorials
    (:require [reagent.core :as reagent]
              [re-frame.core :as rf]))

(def tutorial-steps
    {
        :first-time 
            {:order 1 
             :instructions 
                [:div
                    [:h2 "First Time Here?"]
                    [:p "This seems to be your first time here. We have started our portal tutorial for you. 
                    You can restart it any time by refreshing the site and clicking begin tutorial."]
                    [:p "Click next and previous to step through the tutorial to get a description of the various parts of this tool."]]}
        :batch-items 
            {:order 2 
             :instructions
                [:div
                    [:h2 "Batch Items"]
                    [:p "This is the list of items that need your attention. Click on an item to view or edit its properties."]
                    [:p "More than one person can work on the batch simultaneously."]]}
        :progress-bar 
            {:order 3
             :instructions 
                [:div.progress-tutorial
                    [:h2 "Finalized Progress"]
                    [:p "This progress bar shows you progress of 3 different states listed below."]
                    [:ul
                        [:li "Viewed Progress"]
                        [:li "Edited Items Progress"]
                        [:li "Marked Complete Progress"]]]}
        :edit-icon/save-action 
            {:order 4
             :invert-color true
             :instructions
             [:div
                [:h2
                    [:i.fa.fa-floppy-o] " SaveItem"]
                [:p "Each item for which you enter or edit data will need to be saved.  Click this button to save your changes."]
                [:p "Note:  If you do not save your changes, you can continue editing the item at a later time by 
                clicking back into it—at which point you will be prompted to either keep or discard your previous
                unsaved changes."]]}
        :edit-icon/mark-complete 
            {:order 5
             :invert-color true
             :instructions
                [:div
                    [:h2 [:i.fa.fa-check-circle-o] " Mark Item Complete"]
                    [:p "This will flag the item as complete.  Doing so is not required for Blain Supply.  It is just a 
                    visual indicator to differentiate between items that have been edited and those that no longer
                    need attention."]]}
        :edit-icon/mark-incomplete 
            {:order 6
             :invert-color true
             :instructions
                [:div
                    [:h2 [:i.fa.fa-check-circle] " Unmark Item Complete"]
                    [:p "This action simply reverses the previous one, removing the “complete” flag from an item."]]}
        :edit-icon/forget-changes 
            {:order 7
             :invert-color true
             :instructions
                [:div 
                    [:h2 [:i.fa.fa-trash] " Forget Changes"]
                    [:p "This action will discard any unsaved changes."]]}
        :edit-icon/release 
            {:order 8
             :invert-color true
             :instructions
                [:div 
                    [:h2 [:i.fa.fa-unlink] " Release Item"]
                    [:p "Releasing an item will cause it to no longer be checked out, making it available for other users to view and edit."]]}
        :item-icon-legend
            {:order 9
             :instructions
              [:div
                [:h2 "Item Status Icon Legend"]
                [:p "Each item can be in a variety of states indicated by an icon. Click legend to see a description of each state."]
                [:ul.item-status-icon-legend
                    [:li.fa.fa-lock
                        "Someone else is editing and you are currently locked out. The item will also
                        appear gray. You can steal the item from the editing user but they may loose existing progress."]
                    [:li.fa.fa-check
                        "This icon indicates that someone has saved changes to the item."]
                    [:li.fa.fa-circle
                        "You or a co-worker has flagged the item as complete. Blain’s does not need the item marked as complete. 
                        It is an indicator to help you keep track of progress. This is covered in more detail later in the tutorial."]]]}
        :item-filter
            {:order 10
             :instructions
                [:div
                    [:h2 "FilterItems"
                     [:p "When text is entered into this field, the item list will only display items that match it."]]]}
        :single-item-edit
            {:order 11
             :instructions
              [:div
                [:h2 "Edit Item"]
                [:p "Clicking on an item will load its details into the section to the right. Here, you can view and edit its properties."]
                [:p "Multiple people can edit a given batch of items simultaneously. When you click on an item, you have “checked it out,” 
                 and it will appear gray for others. You can steal a checked out item, but that will cause the other user to lose any changes that they have not saved."]]}
        :minimize-side-bar
            {:order 12
             :instructions
                [:div
                    [:h2 [:i.fa.fa-bars "Minimize the Sidebar"]]
                    [:p "To Minimize the Sidebar and only see minimal icons click on this"]]}
        :maximize-side-bar
            {:order 13
             :instructions
              [:div
                [:h2 [:i.fa.fa-bars "Maximize the Sidebar"]]
                [:p "Click this again to maximize the side bar"]]}
        :batch-expires
            {:order 14
             :instructions
              [:div
                 [:h2 [:i.fa.fa-clock-o] "Batch Expiration"]
                 [:p "Your batch will expire in the amount of time specified. This means that you will be locked out of
                 the batch once the timer reaches zero, at which point Blain’s will receive the changes and determine what to do with them."]]}
        :finalize-batch
            {:order 15
             :instructions
               [:div
                  [:h2 "Finalize Batch"]
                  [:div.text-center.danger [:i.fa.fa-triangle] "Important"]
                  [:p "Clicking on this button will finalize the batch. When a batch is finalized, it will
                  be sent back to Blain Supply for review. At this point, you will no longer be able to edit the items,
                  and anyone else who is currently editing will be kicked out."]]}})

