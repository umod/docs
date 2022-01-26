---
hide_table_of_contents: true
---

# CanSeeStash

## Usage

* Called when a player is looking at a hidden stash
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object CanSeeStash(BasePlayer player, StashContainer stash)
{
    Puts("CanSeeStash works!");
    return null;
}
```
