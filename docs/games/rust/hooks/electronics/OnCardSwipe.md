---
hide_table_of_contents: true
---

# OnCardSwipe

## Usage

* Called when a player is trying to swipe a card
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnCardSwipe(CardReader cardReader, Keycard card, BasePlayer player)
{
    Puts("OnCardSwipe works!");
    return null;
}
```
