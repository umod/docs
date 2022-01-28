---
hide_table_of_contents: true
---

# OnSurveyGather

## Usage

* Called before items are gathered from a survey charge
* No return behavior

## Examples

```csharp title=""
void OnSurveyGather(SurveyCharge survey, Item item)
{
    Puts("OnSurveyGather works!");
}
```
