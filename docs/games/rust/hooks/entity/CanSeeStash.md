---
hide_table_of_contents: true
---

# CanSeeStash

## Usage

* Called when a player is looking at a hidden stash
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object CanSeeStash(BasePlayer player, StashContainer stash)
{
    Puts("CanSeeStash works!");
    return null;
}
```
