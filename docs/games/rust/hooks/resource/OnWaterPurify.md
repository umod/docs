---
hide_table_of_contents: true
---

# OnWaterPurify

## Usage

* Called when salt water is about to be converted to fresh water in a water purifier
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object OnWaterPurify(WaterPurifier waterPurifier, float timeCooked)
{
    Puts("OnWaterPurify works!");
    return null;
}
```
