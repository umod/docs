---
hide_table_of_contents: true
---

# CanUseUI

## Usage

* Called when the player attempts to use a custom UI
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object CanUseUI(BasePlayer player, string json)
{
    Puts("CanUseUI works!");
    return null;
}
```
