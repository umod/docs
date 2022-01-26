---
hide_table_of_contents: true
---

# OnCardSwipe

## Usage

* Called when a player is trying to swipe a card
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object OnCardSwipe(CardReader cardReader, Keycard card, BasePlayer player)
{
    Puts("OnCardSwipe works!");
    return null;
}
```
