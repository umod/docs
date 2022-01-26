---
hide_table_of_contents: true
---

# OnItemSubmit

## Usage

* Called when a player submits an item into a mailbox or dropbox
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object OnItemSubmit(Item item, Mailbox mailbox, BasePlayer player)
{
    Puts("OnItemSubmit works!");
    return null;
}
```
