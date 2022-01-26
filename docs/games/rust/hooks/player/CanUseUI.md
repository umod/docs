---
hide_table_of_contents: true
---

# CanUseUI

## Usage

* Called when the player attempts to use a custom UI
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object CanUseUI(BasePlayer player, string json)
{
    Puts("CanUseUI works!");
    return null;
}
```
