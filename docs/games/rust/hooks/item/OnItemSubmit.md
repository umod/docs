---
hide_table_of_contents: true
---

# OnItemSubmit

## Usage

* Called when a player submits an item into a mailbox or dropbox
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnItemSubmit(Item item, Dropbox dropbox, BasePlayer player)
{
    Puts("OnItemSubmit works!");
    return null;
}
```

```csharp title=""
object OnItemSubmit(Item item, Mailbox mailbox, BasePlayer player)
{
    Puts("OnItemSubmit works!");
    return null;
}
```
