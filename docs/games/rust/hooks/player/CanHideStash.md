---
hide_table_of_contents: true
---

# CanHideStash

## Usage

* Called when a player tries to hide a stash
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object CanHideStash(BasePlayer player, StashContainer stash)
{
    Puts("CanHideStash works!");
    return null;
}
```
