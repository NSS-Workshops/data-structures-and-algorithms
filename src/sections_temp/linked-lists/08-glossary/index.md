# Glossary: Linked Lists & Playlists

This glossary contains the key terms from our music playlist journey through linked lists. Each definition uses our playlist theme to help you remember these important computer science concepts.

## **Linked List**
A way to organize data like a chain of songs in a playlist, where each song knows which song comes next. Unlike arrays, songs don't need to be stored next to each other in memory.

## **Node**
A single item in a linked list, like one song in a playlist. Each node contains data (the song information) and a pointer to the next node (next song).

## **Head**
The first node in a linked list, like the first song in your playlist. This is your starting point to access all other songs.

## **Tail**
The last node in a linked list, like the final song in your playlist. Its 'next' pointer is null because there's no song after it.

## **Pointer**
A reference that tells you where to find the next node, like a note saying 'play this song next'. In code, it's usually called 'next'.

## **Singly Linked List**
A basic playlist where each song only knows about the next song. You can only move forward through the playlist, not backward.

## **Doubly Linked List**
A playlist where each song knows both the next song AND the previous song. This lets you move forward and backward through your playlist.

## **Circular Linked List**
A playlist that loops forever - when you reach the last song, it automatically goes back to the first song. Perfect for party music!

## **Traversal**
Moving through a linked list from one node to the next, like playing through all songs in your playlist from start to finish.

## **Insertion**
Adding a new song to your playlist. You can add it at the beginning, end, or anywhere in the middle by updating the pointer connections.

## **Deletion**
Removing a song from your playlist by updating the pointers so they skip over the unwanted song, effectively removing it from the chain.

## **LIFO**
Last In, First Out - like a stack of books where you take from the top. The most recently added item is the first one you remove.

## **O(1)**
Constant time - an operation that takes the same amount of time whether you have 10 songs or 10,000 songs in your playlist.

## **O(n)**
Linear time - an operation that takes longer as your playlist gets bigger. Finding the 50th song takes longer than finding the 5th song.

## **Null**
A special value meaning 'nothing' or 'empty'. Used to mark the end of a playlist - the last song's 'next' pointer is null.