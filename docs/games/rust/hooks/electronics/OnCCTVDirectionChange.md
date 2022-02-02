---
hide_table_of_contents: true
---

# OnCCTVDirectionChange

## Usage

* Called when a player attempts to change the direction of a CCTV camera to face them
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnCCTVDirectionChange(CCTV_RC camera, BasePlayer player)
{
    Puts("OnCCTVDirectionChange works!");
    return null;
}
```
